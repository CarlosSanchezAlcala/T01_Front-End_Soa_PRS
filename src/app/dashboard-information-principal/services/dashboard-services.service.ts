import { Injectable } from '@angular/core';
import {environment} from "@soa/env/environment.development";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardServicesService {

  private UrlOperativeUnit = `${environment.apiUrlOperativeUnit}/api/operativeUnit`;

  constructor(private _http: HttpClient) { }

  findAllDataOperativeUnit() {
    return this._http.get(this.UrlOperativeUnit + '/listData');
  }

}
