import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPostSelectPage } from './new-post-select.page';
import { SharedModule } from "../../app/shared/shared.module";

@NgModule({
  declarations: [
    NewPostSelectPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(NewPostSelectPage),
  ],
})
export class NewPostSelectPageModule {}
