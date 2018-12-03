import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  apiUrl = 'http://192.168.1.113:3000/tbl_member/my_profile';
  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  getUser() {
    return new Promise(resolve => {
      this.http.get( this.apiUrl , {
        headers: {
          authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM0NTEwLCJleHAiOjE1NDM1NjM4NTV9.VtoQB4Q96ISi8MRK1YiHjFPFlj9BdYXOWmOlkP5XLjU'
        }
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
