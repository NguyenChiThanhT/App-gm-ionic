import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class TblPickupApi {

  private resourceName: string = 'tbl_pickups';

  constructor(public api: Api) {
  }

  all(params?: any) {
    return this.api.get(this.resourceName, params);
  }

  findById(id: number | string, params?: any) {
    return this.api.get(`${this.resourceName}/${id}`, params);
  }
}
