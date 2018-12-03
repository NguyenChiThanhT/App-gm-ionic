import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/core/services/auth.service';
import { TabsPage } from '../tabs/tabs.page';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {

  account: any = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.authService.currentUser = {name: 'Dang'};
    this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});

    // this.authService.login(this.account)
    //   .subscribe((res: any) => {
    //     this.authService.currentUser = res.data;
    //   });
  }

  goToSignUpPage() {
    this.navCtrl.push(SignupPage)
  }
}
