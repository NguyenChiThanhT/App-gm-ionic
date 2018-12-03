import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { NativeStorage } from "@ionic-native/native-storage";
import { SplashPage } from '../pages/splash/splash.page';
import { LoginPage } from "../pages/login/login.page";


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {

  rootPage: any = LoginPage;

  constructor(platform: Platform,
              nativeStorage: NativeStorage,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      nativeStorage.getItem('twitter_user')
        .then(function (data) {
          console.log('data', data);
        }, function (error) {
          console.log('error', error);
        });

      statusBar.styleDefault();
      const splash = modalCtrl.create(SplashPage);
      splash.present();
    });
  }
}

