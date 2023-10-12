import {Component, OnInit} from '@angular/core';
import {AsignationService} from "@soa/asignation/services/asignation.service";
import {Router} from "@angular/router";
import {Asignation} from "@soa/asignation/model/asignation.model";
import {transactionDataCompleteResponse} from "@soa/asignation/model/transactionDataComplete.model";

@Component({
  selector: 'app-asignation-list',
  templateUrl: './asignation-list.component.html',
  styleUrls: ['./asignation-list.component.scss']
})
export class AsignationListComponent implements OnInit {

  funcionaryColumns: string[] = ['dataFuncionary', 'dniFuncionary', 'dataTeen', 'dniTeen', 'descripcionAsignacion', 'actions'];
  asignationData: any[] = [];
  withOutBodyAsignation: any[] = [];

  constructor(private _asignationService: AsignationService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.findAllDataActive();
    this.findAllDataWithoutBody();
  }

  navigateToForm() {
    this._router.navigate(['asignacion/asignation-form']).then(() => {
      console.log('Se está redirigiendo al formulario de registro.')
    })
  }

  findAllDataWithoutBody() {
    this._asignationService.findAllDatosWithoutBody().subscribe((dataAllWithoutBody: any) => {
      console.log('Datos encontrados sin cuerpo de relleno son: ', dataAllWithoutBody);
      this.withOutBodyAsignation = dataAllWithoutBody;
    })
  }

  findAllDataAsignation() {
    this._asignationService.findAll().subscribe((dataAsignation: any) => {
      console.log('Datos de la asignación: ', dataAsignation);
      //this.asignationData = dataAsignation; => No hace el filtrado por datos activos.
    })
  }

  findAllDataActive() {
    this._asignationService.findAllDataActive().subscribe((dataAsignationActive: any) => {
      console.log('Datos de la asignación en modo Activo: ', dataAsignationActive);
      this.asignationData = dataAsignationActive;
    })
  }

  updateDataAsignation(asignation: Asignation) {
    this._asignationService.asignationSelected = asignation;
    this.navigateToForm();
    this.findAllDataAsignation();
  }

  updateTwoWayDataAsignation(twoWayAsignation: transactionDataCompleteResponse) {
    this._asignationService.transactionSelected = twoWayAsignation;
    this.navigateToForm();
    this.findAllDataAsignation();
  }

  deleteLogical(asignation: Asignation) {
    this._asignationService.deleteLogicalDataAsignation(asignation).subscribe((dataDeleteLogical) => {
      console.log('Se esta eliminando el dato de: ', dataDeleteLogical);
      this.findAllDataActive();
    })
  }

  deleteDataCompleteAsignation(asignation: Asignation) {
    this._asignationService.deleteDataAsignationComplete(asignation).subscribe((dataDeleteCompleteAsignation) => {
      console.log('El dato eliminado es: ', dataDeleteCompleteAsignation);
      this.findAllDataActive();
    })
  }
}
