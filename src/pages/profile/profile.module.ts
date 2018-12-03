import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile.page';
import { SharedModule } from "../../app/shared/shared.module";

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
