import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search.page';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule {}
