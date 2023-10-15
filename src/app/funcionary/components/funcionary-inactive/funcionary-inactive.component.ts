import { Component, OnInit } from '@angular/core';
import { FuncionaryService } from "@soa/funcionary/services/funcionary.service";
import { Router } from "@angular/router";
import { Funcionary } from "@soa/funcionary/model/funcionary.model";
import { CoreService } from '@soa/core/core.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-funcionary-inactive',
  templateUrl: './funcionary-inactive.component.html',
  styleUrls: ['./funcionary-inactive.component.scss']
})
export class FuncionaryInactiveComponent implements OnInit {

  funcionaryColumns: string[] = ['name', 'surname', 'dni', 'phonenumber', 'range', 'confirmation', 'address', 'ubigeo', 'email', 'actions'];
  funcionaryData: any[] = [];
  ubigeoData: any[] = [];

  constructor(public funcionaryServices: FuncionaryService,
    private router: Router, private _coreService: CoreService, private http: HttpClient, private _dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.findAllDataInactive();
    this.findAllDataUbigeoNecesary();
  }

  getCompleteConfirmation(confirmation: string) {
    return confirmation === 'S' ? 'Confirmado' : 'Denegado';
  }

  getDataUbigeoCompleteFind(codubi: string) {
    const ubication = this.ubigeoData.find((item) => item.codubi === codubi);
    if (ubication) {
      return `${ubication.depar} - ${ubication.provi} - ${ubication.distri}`;
    } else {
      return 'Ubigeo no determinado o no valido, verificar por favor, gracias.'
    }
  }

  navigateToListDataComplete() {
    this.router.navigate(['funcionario/funcionary-list']).then(() => {
      // console.log('Se está redigiendo a la pestaña de los datos generales');  --------- // Running successfully
    });
  }

  findAllDataUbigeoNecesary() {
    this.funcionaryServices.findAllDataUbigeoAddress().subscribe((dataCompleteUbigeo: any) => {
      this.ubigeoData = dataCompleteUbigeo;
    })
  }

  findAllDataInactive() {
    this.funcionaryServices.findAllDataInactive().subscribe((totalDataFuncionaryInactive: any) => {
      // console.log('Los datos en estado inactivos son los siguiente: ', totalDataFuncionaryInactive);  --------- // Running successfully
      this.funcionaryData = totalDataFuncionaryInactive;
    })
  }

  reactiveDataFuncionary(funcionary: Funcionary) {
    this.funcionaryServices.reactiveLogicalDataFuncionary(funcionary).subscribe((reactiveDataFuncionary) => {
      // console.log('Se está reactivando el funcionario: ', reactiveDataFuncionary);  --------- // Running successfully
      this.findAllDataInactive();
    })
  }

}
