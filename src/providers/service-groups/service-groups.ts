import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceGroupsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceGroupsProvider {

  constructor(public http: HttpClient) {
  }

  getApiUrlServiceGroups : string = "https://na-italia.info/main_server/client_interface/json/?switcher=GetServiceBodies&cache_buster=" + Math.random();

  getAllServiceGroups() {
    return this.http.get(this.getApiUrlServiceGroups);
  }





}
