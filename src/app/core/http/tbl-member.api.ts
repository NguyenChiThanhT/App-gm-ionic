import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class TblMemberApi {

  private resourceName: string = 'tbl_member';
  private headersInfo: object = {
    headers: {
      authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM0NDAwLCJleHAiOjE1NDUzNzg0OTF9.mLX8dnRQ0mJK8pZd29B3ujOrwrdYLaKEJrfQ-jWGCZo'
    }
  };

  constructor(public api: Api) {
  }

  all(params?: any) {
    return this.api.get(this.resourceName, params);
  }

  findById(id: number | string, params?: any) {
    return this.api.get(`${this.resourceName}/${id}`, params, this.headersInfo );
  }

  update(id: number | string, params?: any) {
    return this.api.put(`${this.resourceName}/${id}`, params);
  }

  delete(id: number | string, params?: any) {
    return this.api.delete(`${this.resourceName}/${id}`, params);
  }

  getCurrent(){
    return this.api.get(`${this.resourceName}/my_profile`, {}, this.headersInfo );
  }

  getFollowersbyId(id: number | string, params?: any){
    return this.api.get(`${this.resourceName}/${id}/get_followers_of_member`, {}, this.headersInfo );
  }

  getFollowingsbyId(id: number | string, params?: any){
    return this.api.get(`${this.resourceName}/${id}/get_following_of_member`, {}, this.headersInfo );
  }

  followUser(id: number | string){
    return this.api.post(`${this.resourceName}/${id}/follow_or_unfollow?"follow"=true`, {}, this.headersInfo );
  }

  unfollowUser( id: number | string ){
    return this.api.post(`${this.resourceName}/${id}//follow_or_unfollow?"follow"=false`, {}, this.headersInfo );
  }
}
