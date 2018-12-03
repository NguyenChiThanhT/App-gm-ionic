import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/core/services/auth.service';
import { LoginPage } from '../login/login.page';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search.page';
import { NewPostSelectPage } from "../new-post-select/new-post-select.page";
import {FavoritePage} from "../favorite/favorite-page.page";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.page.html',
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = NewPostSelectPage;
  tab3Root: any = SearchPage;
  tab4Root: any = FavoritePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService) {
  }

  ionViewCanEnter() {
    if (this.authService.currentUser) {
      console.log('logged in');
    } else {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
