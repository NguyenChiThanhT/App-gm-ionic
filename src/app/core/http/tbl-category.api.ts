import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class TblCategoryApi {

  private resourceName: string = 'tbl_categories';

  constructor(public api: Api) {
  }

  all(params?: any) {
    return this.api.get(this.resourceName, params);
  }

  findById(id: number | string, params?: any) {
    return this.api.get(`${this.resourceName}/${id}`, params);
  }

  update(id: number | string, params?: any) {
    return this.api.put(`${this.resourceName}/${id}`, params);
  }

  delete(id: number | string, params?: any) {
    return this.api.delete(`${this.resourceName}/${id}`, params);
  }
}
