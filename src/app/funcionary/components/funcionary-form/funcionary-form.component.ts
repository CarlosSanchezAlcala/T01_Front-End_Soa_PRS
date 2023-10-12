import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FuncionaryService} from "@soa/funcionary/services/funcionary.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-funcionary-form',
  templateUrl: './funcionary-form.component.html',
  styleUrls: ['./funcionary-form.component.scss']
})
export class FuncionaryFormComponent implements OnInit, OnDestroy {

  funcionaryDataForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public funcionaryServices: FuncionaryService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initFuncionaryForm();
  }

  navigateToFuncionaryList() {
    this.router.navigate(['funcionario/funcionary-list']).then(() => {
      console.log('Se está redirigiendo a la pestaña de listado de datos');
    });
  }

  initFuncionaryForm() {
    this.funcionaryDataForm = this.fb.group({
      id_funcionary: [null],
      name: ['', Validators.required],
      surnamefather: ['',Validators.required],
      surnamemother: ['', Validators.required],
      dni: ['', Validators.required],
      phonenumber: ['', Validators.required],
      range: ['', Validators.required],
      confirmation: ['N'],
      department: ['', Validators.required],
      address: ['',Validators.required],
      email: ['',Validators.required],
      status: ['A'],
    });
    if (this.funcionaryServices.funcionarySelected) {
      this.funcionaryDataForm.patchValue(this.funcionaryServices.funcionarySelected);
    }
  }

  saveFuncionary() {
    if (this.funcionaryServices.funcionarySelected) {
      // Actualizar || Modificar
      this.updateDataFuncionary();
    } else {
      // Registrar || Crear
      this.registerNewDataFuncionary();
    }
  }

  registerNewDataFuncionary() {
    console.log('Datos ingresados en el formulario: ', this.funcionaryDataForm.value);
    this.funcionaryServices.saveNewFuncionary(this.funcionaryDataForm.value).subscribe((dataRegister) => {
      console.log('Los datos ingresados dentro del formulario para registrar || crear son: ', dataRegister);
      this.funcionaryDataForm.reset();
      this.navigateToFuncionaryList();
    })
  }

  updateDataFuncionary() {
    console.log('Datos ingresados en el formulario: ', this.funcionaryDataForm.value);
    this.funcionaryServices.updateDataFuncionary(this.funcionaryDataForm.value).subscribe((dataUpdate) => {
      console.log('Los datos ingresados dentro del formulario para modificar || actualiazr son: ', dataUpdate);
      this.funcionaryDataForm.reset();
      this.navigateToFuncionaryList();
    })
  }

  ngOnDestroy(): void {
    this.funcionaryServices.funcionarySelected = undefined;
  }
}
