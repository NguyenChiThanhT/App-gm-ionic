import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileTimelinePage } from "../profile-timeline/profile-timeline.page";
import { ProfileDetailPage } from "../profile-detail/profile-detail.page";
import { TblMemberApi } from "../../app/core/http/tbl-member.api";
import { TblMemberRaw } from "../../app/models/tbl-member.model";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.page.html',
})
export class ProfilePage {
  userInfo: TblMemberRaw  = {
    id: 0,
    type: '',
    attributes:{
      member_name: '',
      hp_url: '',
      instagram_url: '',
      twitter_url: '',
      facebook_url: '',
      note: '',
    }
  };
  avatarSrc: string = '../../../assets/imgs/logo.png';

  /*
  * memberType value:
  * 0 _ Not Defined
  * 1 _ Current Logged In User
  * 2 _ Other User
  * */
  memberType: number = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tblMemberApi: TblMemberApi) {
  }

  ionViewDidLoad() {
    if(this.navParams.data.userID){
      this.tblMemberApi.findById( this.navParams.data.userID ).subscribe((res: any) => {
        console.log(res);
        this.userInfo = res.data;
        this.avatarSrc = 'https://weboo.link/images/member_image/' + this.userInfo.id + '.jpg';
        this.memberType = 2
      });
    } else {
      this.tblMemberApi.getCurrent().subscribe((res: any) => {
        console.log(res);
        this.userInfo = res.data;
        this.avatarSrc = 'https://weboo.link/images/member_image/' + this.userInfo.id + '.jpg';
        this.memberType = 1
      });
    }
  }

  goToTimelinePage(userID){
    this.navCtrl.push(ProfileTimelinePage, {userID: userID});
  }

  goToDetailPage(){
    this.navCtrl.push(ProfileDetailPage);
  }

  /* TODO: put this on core Module Later */
  imageErrorHandling(err) {
    console.log('load image error');
    this.avatarSrc = '../../../assets/imgs/logo.png';
  }

  openSocial(url: string) {
    console.log( 'social button has been clicked with the link ' + url );
  }

  goBack(){
    this.navCtrl.pop();
  }
}
