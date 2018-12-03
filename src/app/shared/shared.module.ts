import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { ScrollableSegmentComponent } from './components/scrollable-segment/scrollable-segment.component';
import { SectionTitleComponent } from './components/section-title/section-title';
import { TopSearchBarComponent } from './components/top-search-bar/top-search-bar';
import { ArticleListComponent } from './components/article-list/article-list';
import { SearchNoResultsComponent } from './components/search-no-results/search-no-results';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { MemberItemComponent } from "./components/member-item/member-item";
import { MiniPostListComponent } from "./components/mini-post-list/mini-post-list.component";
import { BtnFacebookComponent } from "./components/btn-facebook/btn-facebook";
import { BtnTwitterComponent } from "./components/btn-twitter/btn-twitter";
import { PickupListComponent } from './components/pickup-list/pickup-list';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ScrollableSegmentComponent,
    SectionTitleComponent,
    TopSearchBarComponent,
    ArticleListComponent,
    SearchNoResultsComponent,
    MemberItemComponent,
    EllipsisPipe,
    MiniPostListComponent,
    BtnFacebookComponent,
    BtnTwitterComponent,
    PickupListComponent
  ],
  exports: [
    ScrollableSegmentComponent,
    SectionTitleComponent,
    TopSearchBarComponent,
    ArticleListComponent,
    SearchNoResultsComponent,
    MemberItemComponent,
    EllipsisPipe,
    MiniPostListComponent,
    BtnFacebookComponent,
    BtnTwitterComponent,
    PickupListComponent
  ]
})
export class SharedModule {
}
