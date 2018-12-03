import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

// Facebook login
import { TabsPage } from '../tabs/tabs.page';


@Component({
  selector: 'page-first-page',
  templateUrl: 'first-page.page.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  onOpenWebview(url: string) {
    // Setup options
    const options: InAppBrowserOptions = {
      zoom: 'no'
    };

    // Open url
    this.inAppBrowser.create(url, '_self', options)
  }

  goToHomePage() {
    this.navCtrl.setRoot(TabsPage);
  }
}
