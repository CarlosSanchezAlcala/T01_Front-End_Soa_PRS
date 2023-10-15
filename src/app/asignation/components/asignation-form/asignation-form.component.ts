import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AsignationService} from "@soa/asignation/services/asignation.service";
import {FuncionaryService} from "@soa/funcionary/services/funcionary.service";
import {TeenService} from "@soa/teen/services/teen.service";

@Component({
  selector: 'app-asignation-form',
  templateUrl: './asignation-form.component.html',
  styleUrls: ['./asignation-form.component.scss']
})
export class AsignationFormComponent implements OnInit, OnDestroy {

  asignationDataForm: FormGroup = new FormGroup({});
  funcionaryData: any[] = [];
  teenData: any[] = [];
  allDataAsignation: any[] = [];
  dataNoRegisterInBd: any[] = [];

  constructor(private _router: Router,
              public _asignationService: AsignationService,
              private _asignationDataFuncionaryService: FuncionaryService,
              private _asignationDataTeenService: TeenService,
              private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initAsignationForm();
    this.findAllDataFuncionaryRankLegalGuardian();
    this.findAllTeen();
    this.finAllDataTeenNoRegistered();
  }

  navigateToAsignationList() {
    this._router.navigate(['asignacion/asignation-list']).then(() => {
      console.log('Se está redirigiendo a la lista de todas las asignaciones.')
    });
  }

  findAllFuncionary() {
    this._asignationDataFuncionaryService.findAllDataActive().subscribe((dataFuncionary: any) => {
      console.log('Datos obtenidos de Funcionario: ', dataFuncionary);
      //this.funcionaryData = dataFuncionary; => Datos completos de "Funcionario", sin filtrado de Tutor Legal.
    })
  }

  findAllDataFuncionaryRankLegalGuardian() {
    this._asignationDataFuncionaryService.findDataRankLegalGuardian().subscribe((dataLegalGuardianRank: any) => {
      console.log('Funcionarios con rank de Tutor Legal: ', dataLegalGuardianRank);
      this.funcionaryData = dataLegalGuardianRank;
    })
  }

  findAllTeen() {
    this._asignationDataTeenService.findAllDataActive().subscribe((dataTeen: any) => {
      console.log('Datos obtenidos de Funcionario: ', dataTeen);
      //this.teenData = dataTeen; => Datos completos de "Teen", sin filtrado si en caso ya está registrado.
    })
  }

  finAllDataTeenNoRegistered() {
    this._asignationService.findDataTeenNoRegistered().subscribe((dataTeenNoRegistered: any) => {
      console.log('Los adolescente disponibles para el registro son: ', dataTeenNoRegistered);
      this.teenData = dataTeenNoRegistered;
    })
  }

  initAsignationForm() {
    this.asignationDataForm = this._fb.group({
      id_funcionaryteend: [null],
      id_funcionary: [''],
      id_teen: [''],
      status: ['A'],
      description: [''],
    });
    if (this._asignationService.transactionSelected) {
      this.asignationDataForm.patchValue(this._asignationService.transactionSelected);
    }
  }

  saveAsignation() {
    if (this._asignationService.transactionSelected) {
      // Actualizar || Modificar
      this.updateDataExistentAsignation();
    } else {
      // Registrar || Crear
      this.registerNewDataAsignation();
    }
  }

  registerNewDataAsignation() {
    console.log('Datos ingresados en el formulario: ', this.asignationDataForm.value);
    this._asignationService.saveNewAsignation(this.asignationDataForm.value).subscribe((dataFormNewAsignation) => {
      console.log('Los datos a registrar son: ', dataFormNewAsignation);
      this.asignationDataForm.reset();
      this.navigateToAsignationList();
    })

  }

  updateDataExistentAsignation() {
    console.log('Los datos a actualizar son: ', this.asignationDataForm.value);
    this._asignationService.updateDataAsignation(this.asignationDataForm.value).subscribe((dataUpdateAsignation) => {
      console.log('Los datos ingresados para actualizar son: ', dataUpdateAsignation);
      this.asignationDataForm.reset();
      this.navigateToAsignationList();
    })
  }

  ngOnDestroy(): void {
    this._asignationService.transactionSelected = undefined;
  }
}
