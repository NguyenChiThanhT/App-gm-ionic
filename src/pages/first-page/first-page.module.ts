import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";


// Share module
import { SharedModule } from "../../app/shared/shared.module";

import { Facebook } from "@ionic-native/facebook";
import { TwitterConnect } from "@ionic-native/twitter-connect"
import { NativeStorage } from "@ionic-native/native-storage";

// Page
import { FirstPage } from './first-page.page';

@NgModule({
  declarations: [
    FirstPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(FirstPage),
  ],
  exports: [],
  providers: [InAppBrowser, Facebook, TwitterConnect, NativeStorage]
})
export class FirstPageModule {
}
