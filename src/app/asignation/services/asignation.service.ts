import {Injectable} from '@angular/core';
import {environment} from "@soa/env/environment.development";
import {Asignation} from "@soa/asignation/model/asignation.model";
import {HttpClient} from "@angular/common/http";
import {transactionDataCompleteResponse} from "@soa/asignation/model/transactionDataComplete.model";

@Injectable({
  providedIn: 'root'
})
export class AsignationService {

  private urlAsignation = `${environment.apiUrlAsignation}/api/transaccionalData`;
  asignationSelected: Asignation | undefined = undefined;
  transactionSelected: transactionDataCompleteResponse | undefined = undefined;

  constructor(private _http: HttpClient) {
  }

  findAll() {
    return this._http.get(this.urlAsignation + '/listData');
  }

  findAllDatosWithoutBody() {
    return this._http.get(this.urlAsignation + '/listDataIdRegister');
  }

  findAllDataActive() {
    return this._http.get(this.urlAsignation + '/listData/active');
  }

  findDataIdRegister() {
    return this._http.get(this.urlAsignation + '/listDataIdRegister');
  }

  findDataTeenNoRegistered() {
    return this._http.get(this.urlAsignation + '/listData/noRegisteredTeen')
  }

  findAllDataInactive() {
    return this._http.get(this.urlAsignation + '/listData/inactive');
  }

  saveNewAsignation(asignation: Asignation) {
    return this._http.post(this.urlAsignation, asignation);
  }

  updateDataAsignation(asignation: Asignation) {
    return this._http.put(this.urlAsignation + '/' + asignation.id_funcionaryteend, asignation);
  }

  updateTwoWayAsignation(twoWayAsignation: transactionDataCompleteResponse) {
    return this._http.put(this.urlAsignation + '/' + twoWayAsignation.transaccionalAllocation.id_funcionaryteend, twoWayAsignation);
  }

  deleteLogicalDataAsignation(asignation: Asignation) {
    return this._http.patch(this.urlAsignation + '/deleteLogical/' + asignation.id_funcionaryteend, asignation);
  }

  reactiveLogicalDataAsignation(asignation: Asignation) {
    return this._http.patch(this.urlAsignation + '/reactiveLogical/' + asignation.id_funcionaryteend, asignation);
  }

  deleteDataAsignationComplete(asignation: Asignation) {
    return this._http.delete(this.urlAsignation + '/' + asignation.id_funcionaryteend);
  }

}
