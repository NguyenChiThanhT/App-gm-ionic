import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TblMemberRaw } from "../../app/models/tbl-member.model";
import { TblMemberApi } from "../../app/core/http/tbl-member.api";
import { ProfilePage } from "../profile/profile.page";

@Component({
  selector: 'page-profile-detail',
  templateUrl: 'profile-detail.page.html',
})
export class ProfileDetailPage {
  userInfo: TblMemberRaw;
  avatarSrc: string = '../../../assets/imgs/logo.png';

  memberType: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tblMemberApi: TblMemberApi) {

    this.userInfo = {
      id: 0,
      type: '',
      attributes: {
        member_name: '',
        hp_url: '',
        instagram_url: '',
        twitter_url: '',
        facebook_url: '',
        note: '',
      }
    };
  }

  ionViewWillEnter() {
    this.tblMemberApi.getCurrent().subscribe((res: any) => {
      this.userInfo = res.data;
      this.avatarSrc = 'https://weboo.link/images/member_image/' + this.userInfo.id + '.jpg';
      this.memberType = 1;
    });
  }

  goBack() {
    if(this.navCtrl.canGoBack()){
      this.navCtrl.pop();
    }
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }
}
