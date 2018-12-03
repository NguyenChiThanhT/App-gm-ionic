import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileTimelinePage } from './profile-timeline.page';
import { SharedModule } from "../../app/shared/shared.module";

@NgModule({
  declarations: [
    ProfileTimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileTimelinePage),
    SharedModule
  ],
})
export class ProfileTimelinePageModule {}
