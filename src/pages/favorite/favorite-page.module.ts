import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritePage } from './favorite-page.page';
import {SharedModule} from "../../app/shared/shared.module";

@NgModule({
  declarations: [
    FavoritePage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(FavoritePage),
  ],
})
export class FavoritePageModule {}
