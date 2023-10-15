import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@soa/env/environment.development';
import {Teen} from "@soa/teen/model/teen.model";

@Injectable({
  providedIn: 'root',
})
export class TeenService {

  private urlTeen = `${environment.apiUrlTeen}/api/teenData`;
  private urlUbigeoAddress = `${environment.apiUrlUbigeoAddress}/api/address`;

  teenSelected: Teen | undefined = undefined;

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(`${this.urlTeen}/listData`);
  }

  findAllDataActive() {
    return this.http.get(this.urlTeen + '/listData/active');
  }

  findAllDataUbigeoAddress() {
    return this.http.get(this.urlUbigeoAddress + '/listData');
  }

  saveNewTeen(teen: Teen) {
    return this.http.post(this.urlTeen, teen);
  }

  updateDataTeen(teen: Teen) {
    return this.http.put(this.urlTeen + '/' + teen.id_teen, teen);
  }

  deleteLogicalDataTeen(teen: Teen) {
    return this.http.patch(this.urlTeen + '/deleteLogical/' + teen.id_teen, teen);
  }
}
