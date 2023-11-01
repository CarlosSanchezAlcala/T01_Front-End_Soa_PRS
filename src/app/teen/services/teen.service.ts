import {Injectable} from '@angular/core';
import {environment} from '@soa/env/environment.development';
import {Teen} from "@soa/teen/model/teen.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class TeenService {

  private urlTeen = `${environment.apiUrlTeen}/api/teenData`;
  private urlUbigeoAddress = `${environment.apiUrlUbigeoAddress}/api/address`;
  private urlAttorney = `${environment.apiUrlAttorney}/api/attorneyData`;
  private urlOperativeUnit = `${environment.apiUrlOperativeUnit}/api/operativeUnit`

  teenSelected: Teen | undefined = undefined;

  constructor(private __http: HttpClient) {
  }

  findAll() {
    return this.__http.get(`${this.urlTeen}/listData`);
  }

  findAllDataActive() {
    return this.__http.get(this.urlTeen + '/listData/active');
  }

  findAllDataInactive() {
    return this.__http.get(this.urlTeen + '/listData/inactive');
  }

  findAllDataUbigeoAddress() {
    return this.__http.get(this.urlUbigeoAddress + '/listData');
  }

  findAllDataOperativeUnit() {
    return this.__http.get(this.urlOperativeUnit + '/listData');
  }

  findAllDataAttorney() {
    return this.__http.get(this.urlAttorney + '/listData');
  }

  saveNewTeen(teen: Teen) {
    return this.__http.post(this.urlTeen, teen);
  }

  updateDataTeen(teen: Teen) {
    return this.__http.put(this.urlTeen + '/' + teen.id_teen, teen);
  }

  transferDataTeen(teen: Teen) {
    return this.__http.patch(this.urlTeen + '/transferTeen/' + teen.id_teen, teen);
  }

  deleteLogicalDataTeen(teen: Teen) {
    return this.__http.patch(this.urlTeen + '/deleteLogical/' + teen.id_teen, teen);
  }

  reactiveLogicalDataTeen(teen: Teen) {
    return this.__http.patch(this.urlTeen + '/reactiveLogical/' + teen.id_teen, teen);
  }
}
