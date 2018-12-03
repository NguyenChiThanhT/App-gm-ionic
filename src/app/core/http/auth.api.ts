import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class AuthApi {

  private resourceName: string = 'auth';

  constructor(public api: Api) {
  }

  register(params: any) {
    return this.api.post(`${this.resourceName}/sign_up`, params)
  }

  login(params: any) {
    return this.api.post(`${this.resourceName}/sign_in`, params);
  }

  logout() {
    return this.api.delete(`${this.resourceName}/sign_out`)
  }
}
