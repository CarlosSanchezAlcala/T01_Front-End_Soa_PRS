import {Component, OnInit} from '@angular/core';
import {FuncionaryService} from '@soa/funcionary/services/funcionary.service';
import {Router} from "@angular/router";
import {Funcionary} from "@soa/funcionary/model/funcionary.model";
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '@soa/core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ArchivosDComponent } from '@soa/archivos-d/archivos-d.component';

@Component({
  selector: 'app-funcionary-list',
  templateUrl: './funcionary-list.component.html',
  styleUrls: ['./funcionary-list.component.scss'],
})
export class FuncionaryListComponent implements OnInit {

  funcionaryColumns: string[] = ['name', 'surname', 'dni', 'phonenumber', 'range', 'confirmation', 'department', 'address', 'email', 'actions', 'detalles'];
  funcionaryData: any[] = [];
  selectedFuncionario: any;
  showDetails = false;

  constructor(public funcionaryServices: FuncionaryService,
              private router: Router, private _coreService: CoreService,private _dialog: MatDialog,private http: HttpClient) {
  }

  ngOnInit(): void {
    this.findAllDataActive();
  }

  findAll() {
    this.funcionaryServices.findAll().subscribe((dataFuncionary: any) => {
      console.log(dataFuncionary);
      this.funcionaryData = dataFuncionary;
    })
  }

  getCompleteConfirmation(confirmation: string): string {
    return confirmation === 'S' ? 'Confirmado' : 'Denegado';
  }

  findAllDataActive() {
    this.funcionaryServices.findAllDataActive().subscribe((dataFuncionaryActive: any) => {
      console.log('Estos son los datos en modo activos que se están recibiendo de la Base de Datos: ', dataFuncionaryActive);
      this.funcionaryData = dataFuncionaryActive;
    })
  }

  showFuncionarioDetails(funcionario: any) {
    this.selectedFuncionario = funcionario;
    this.showDetails = true;
  }

  closeDetails() {
    this.selectedFuncionario = null;
    this.showDetails = false;
  }



  navigateToForm() {
    this.router.navigate(['funcionario/funcionary-form']).then(() => {
      console.log('Se está redirigiendo a la pestaña del formulario (Registro || Modificación de datos)')
    })
  }

  navigateToInactive() {
    this.router.navigate(['funcionario/funcionary-inactive']).then(() => {
      console.log('Se está redirigiendo a la pestaña del listado de funcionarios inactivos')
    })
  }

  updateDataFuncionary(funcionary: Funcionary) {
    this.funcionaryServices.funcionarySelected = funcionary;
    this.navigateToForm();
    this.findAllDataActive();
  }

  deleteDataFuncionary(funcionary: Funcionary) {
    this.funcionaryServices.deleteLogicalDataFuncionary(funcionary).subscribe((dataDeleteLogical) => {
      console.log('Se esta eliminando el dato de: ', dataDeleteLogical);
      this.findAllDataActive();
    })
  }

  openArchivosDialog(dni: string) {
    const dialogRef = this._dialog.open(ArchivosDComponent, {
      data: { dni: dni },
      width: '50%', // Personaliza el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
