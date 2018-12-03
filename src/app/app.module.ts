import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';

import { CoreModule } from "./core/core.module";
import { MyApp } from './app.component';

// Pages module
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { FirstPageModule } from "../pages/first-page/first-page.module";
import { SearchPageModule } from '../pages/search/search.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ProfileDetailPageModule } from '../pages/profile-detail/profile-detail.module';
import { ProfileTimelinePageModule } from '../pages/profile-timeline/profile-timline.module';
import { SplashPageModule } from '../pages/splash/splash.module';
import { NewPostSelectPageModule } from "../pages/new-post-select/new-post-select.module";
import {FavoritePageModule} from "../pages/favorite/favorite-page.module";


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot(),
    HomePageModule,
    ProfilePageModule,
    ProfileDetailPageModule,
    ProfileTimelinePageModule,
    LoginPageModule,
    TabsPageModule,
    FirstPageModule,
    SplashPageModule,
    SearchPageModule,
    NewPostSelectPageModule,
    FavoritePageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
