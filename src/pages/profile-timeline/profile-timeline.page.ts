import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TblMemberApi } from "../../app/core/http/tbl-member.api";
import { ScrollableSegmentItem } from "../../app/shared/components/scrollable-segment/scrollable-segment-item.model";
import { ProfilePage } from "../profile/profile.page";
import { ProfileDetailPage } from "../profile-detail/profile-detail.page";
import { TblMemberRaw } from "../../app/models/tbl-member.model";
import { TemplateService } from "../../app/core/services/template.service";


@Component({
  selector: 'page-timeline-profile',
  templateUrl: 'profile-timeline.page.html',
})

export class ProfileTimelinePage {
  userInfo: TblMemberRaw;
  avatarSrc: string = '../../../assets/imgs/logo.png';
  segmentItems: ScrollableSegmentItem[];
  timelineTab: string | number;
  followers: any[];
  followings: any[];

  items = [
    'Temp data for post 1',
    'Temp data for post 2',
    'Temp data for post 3',
    'Temp data for post 4',
    'Temp data for post 5',
    'Temp data for post 6',
  ]

  /*
   * memberType value:
   * 0 _ Not Defined
   * 1 _ Current Logged In User
   * 2 _ Other User
   * */
  memberType: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tblMemberApi: TblMemberApi,
              public templateService: TemplateService) {

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

    this.memberType = 0;

    this.segmentItems = [
      {value: 0, label: 'Posts'},
      {value: 1, label: 'Followers'},
      {value: 2, label: 'Followed'}
    ];

    this.timelineTab = 'posts';
  }

  ionViewWillEnter() {
    if (this.navParams.data.userID) {
      this.tblMemberApi.findById(this.navParams.data.userID).subscribe((res: any) => {
        this.userInfo = res.data;
        this.avatarSrc = 'https://weboo.link/images/member_image/' + this.userInfo.id + '.jpg';
        this.memberType = 2;
        this.getAuthorRelatedInformation(this.userInfo.id);
      });
    } else {
      this.tblMemberApi.getCurrent().subscribe((res: any) => {
        this.userInfo = res.data;
        this.avatarSrc = 'https://weboo.link/images/member_image/' + this.userInfo.id + '.jpg';
        this.memberType = 1;
        this.getAuthorRelatedInformation(this.userInfo.id);
      });
    }
  }

  getAuthorRelatedInformation(ID) {
    this.tblMemberApi.getFollowersbyId(ID).subscribe((res: any) => {
      this.followers = res.data.map((data) => {
        return {
          id: data.attributes.from_id,
          name: data.attributes.follower_member.data.attributes.member_name,
          avatar: `https://weboo.link/images/member_image/${data.attributes.from_id}.jpg`,
          followUser: true,
          loading: false,
        };
      });
      console.log('followers of current user: ', res, 'compare to ', this.followers);
    });

    this.tblMemberApi.getFollowingsbyId(ID).subscribe((res: any) => {
      this.followings = res.data.map((data) => {
        return {
          id: data.attributes.to_id,
          avatar: `https://weboo.link/images/member_image/${data.attributes.to_id}.jpg`,
          name: data.attributes.following_member.data.attributes.member_name,
          followUser: true,
          loading: false,
        };
      });
      console.log('followings of current user: ', res, 'compare to', this.followings);
    });
  }

  segmentChanged($event: any) {
    console.log('Hello From Segment Change');
  }

  goToProfilePage(id: number | string) {
    if (id) {
      this.navCtrl.push(ProfilePage, {userID: id});
    } else {
      this.navCtrl.push(ProfilePage);
    }
  }

  gotoDetail() {
    this.navCtrl.push(ProfileDetailPage);
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop();
    }
  }

  followAction($event, array, item) {
    console.log($event, array, item);
    // The target member has been followed by
    item.loading = true;
    if (item.followUser) {
      // Unfollow target
      this.tblMemberApi.unfollowUser(item.id).subscribe((res: any) => {
        console.log('unfollowed user with the id =' + item.id, res);
        item.loading = false;
        item.followUser = !item.followUser;
      });
    } else {
      // Re-follow / Follow Target
      this.tblMemberApi.followUser(item.id).subscribe((res: any) => {
        console.log('followed user with the id =' + item.id, res);
        item.loading = false;
        item.followUser = !item.followUser;
      })
    }
  }
}
