import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FuncionaryService} from "@soa/funcionary/services/funcionary.service";
import {MatDialog} from "@angular/material/dialog";
import {TeenService} from "@soa/teen/services/teen.service";
import {AsignationService} from "@soa/asignation/services/asignation.service";

@Component({
  selector: 'app-teen-form',
  templateUrl: './teen-form.component.html',
  styleUrls: ['./teen-form.component.scss']
})
export class TeenFormComponent implements OnInit, OnDestroy {

  teenDataForm: FormGroup = new FormGroup({});
  legalGuardianAsignationFrom: FormGroup = new FormGroup({});
  funcionaryData: any[] = [];
  attorneyData: any[] = [];
  teenData: any[] = [];
  ubigeoData: any[] = [];
  idTeenNecesaryForRegisterAsignation: any[] = [];

  constructor(private router: Router,
              private fb: FormBuilder,
              public teenServices: TeenService,
              public _asignationServices: AsignationService,
              private _asignationDataFuncionaryService: FuncionaryService,
              public dialog: MatDialog) {
    this.teenDataForm = this.fb.group({
      id_teen: [null],
      name: [''],
      surnamefather: [''],
      surnamemother: [''],
      dni: [''],
      phonenumber: [''],
      address: [''],
      email: [''],
      birthade: [''],
      gender: [''],
      crime_committed: [''],
      attorney: [''],
      codubi: [''],
      status: ['A'],
    });
    this.legalGuardianAsignationFrom = this.fb.group({
      id_funcionaryteend: [null],
      id_funcionary: [''],
      id_teen: [''],
      status: ['A'],
      description: [''],
    })
    if (this.teenServices.teenSelected) {
      this.teenDataForm.patchValue(this.teenServices.teenSelected);
    }
  }

  ngOnInit(): void {
    this.findAllDataActive();
    this.findAllDataFuncionaryRankLegalGuardian();
    this.findAllDataUbigeo();
  }

  navigateToTeenList() {
    this.router.navigate(['adolescente/teen-list']).then(() => {
      // console.log('Se está redirigiendo a la pestaña de listado de datos'); --------- // Running successfully
    });
  }

  findAllDataFuncionaryRankLegalGuardian() {
    this._asignationDataFuncionaryService.findDataRankLegalGuardian().subscribe((dataLegalGuardianRank: any) => {
      // console.log('Funcionarios con rank de Tutor Legal: ', dataLegalGuardianRank); --------- // Running successfully
      this.funcionaryData = dataLegalGuardianRank;
    })
  }

  findAllDataAttorney() {
    this.teenServices.findAllDataAttorney().subscribe((dataFindAttorney: any) => {
        //console.log('Data Attorney: ', dataFindAttorney); //--------- // Running successfully
        this.attorneyData = dataFindAttorney;
    })
  }

  findAllDataUbigeo() {
    this.teenServices.findAllDataUbigeoAddress().subscribe((dataUbigeo: any) => {
      // console.log('Ubigeo Data: ', dataUbigeo); --------- // Running successfully
      this.ubigeoData = dataUbigeo;
    })
  }

  findAllDataActive() {
    this.teenServices.findAllDataActive().subscribe((dataTeenActive: any) => {
      // console.log('Estos son los datos en modo activos que se están recibiendo de la Base de Datos: ', dataTeenActive); --------- // Running successfully
      this.teenData = dataTeenActive;
    })
  }

  saveTeen() {
    if (this.teenServices.teenSelected) {
      // Update || Modify
      this.updateDataTeen();
    } else {
      // Recording || Create
      this.registerNewDataTeenAndAsignation();
    }
  }

  registerNewDataTeenAndAsignation() {
    console.log('Datos ingresados en el formulario: ', this.teenDataForm.value);
    this.teenServices.saveNewTeen(this.teenDataForm.value).subscribe((teendataRegister: any) => {
      console.log('Los datos ingresados dentro del formulario para registrar || crear son: ', teendataRegister);
      this.idTeenNecesaryForRegisterAsignation = teendataRegister.id_teen;
      console.log('The last id Teen is: ', this.idTeenNecesaryForRegisterAsignation);


      this.legalGuardianAsignationFrom.patchValue({
        id_teen: this.idTeenNecesaryForRegisterAsignation,
      });

      console.log('Data in Form for Asignation is: ', this.legalGuardianAsignationFrom.value);

      this._asignationServices.saveNewAsignation(this.legalGuardianAsignationFrom.value).subscribe((dataAsignationForFormTeen: any) => {
        console.log('Data for register in Transactional is: ', dataAsignationForFormTeen);

        this.teenDataForm.reset();
        this.legalGuardianAsignationFrom.reset();
        this.navigateToTeenList();
        this.findAllDataActive();
        this.dialog.closeAll();
      });
    });
  }

  updateDataTeen() {
    console.log('Only Data Form: ', this.teenDataForm.value);
    this.teenServices.updateDataTeen(this.teenDataForm.value).subscribe((dataUpdate) => {
      console.log('Data Form for Modify | Update: ', dataUpdate);
      this.teenDataForm.reset();
      this.navigateToTeenList();
      this.dialog.closeAll();
    });
  }

  ngOnDestroy() {
    this.teenServices.teenSelected = undefined;
    this._asignationServices.asignationSelected = undefined;
  }
}
