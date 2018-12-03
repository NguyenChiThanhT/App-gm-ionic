import { Component, Input } from '@angular/core';
import { TemplateService } from "../../../core/services/template.service";
import { TblMemberApi } from "../../../core/http/tbl-member.api";
import { ProfilePage } from "../../../../pages/profile/profile.page";
import { NavController } from "ionic-angular";

interface tblMemberDetail{
  id: number | string;
  avatar: string;
  name: string;
  followUser: boolean,
  loading: boolean,
}
@Component({
  selector: 'member-item',
  templateUrl: 'member-item.html'
})
export class MemberItemComponent{

  @Input() memberDetail: tblMemberDetail;

  constructor(public templateService: TemplateService,
              private tblMemberApi: TblMemberApi,
              private navCtrl: NavController) {
    console.log('Hello ArticleListComponent Component');
    console.log( this.memberDetail )
  }

  followAction($event: any, item: tblMemberDetail){
    this.memberDetail.loading = true;
    if(this.memberDetail.followUser){
      // Unfollow target
      this.tblMemberApi.unfollowUser( this.memberDetail.id ).subscribe((res:any) => {
        console.log('unfollowed user with the id =' + item.id, res);
        this.memberDetail.loading = false;
        this.memberDetail.followUser = !item.followUser;
      });
    } else {
      // Re-follow / Follow Target
      this.tblMemberApi.followUser( this.memberDetail.id ).subscribe((res:any) => {
        console.log('followed user with the id =' + item.id, res);
        this.memberDetail.loading = false;
        this.memberDetail.followUser = !item.followUser;
      })
    }
  }

  goToProfilePage(id){
    this.navCtrl.push(ProfilePage, {userID: id});
  }
}
