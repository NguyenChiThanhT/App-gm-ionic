// Angular modules
import { Injectable } from '@angular/core';
import { AuthApi } from '../http/auth.api';


@Injectable()
export class AuthService {

  currentUser: any;

  constructor(private authApi: AuthApi) {
  }

  login(params: any) {
    return this.authApi.login(params);
  }

  logout() {
    this.currentUser = null;
    return this.authApi.logout();
  }
}
