import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TblCategoryApi } from '../../app/core/http/tbl-category.api';
import { TblArticleApi } from '../../app/core/http/tbl-article.api';
import { ScrollableSegmentItem } from '../../app/shared/components/scrollable-segment/scrollable-segment-item.model';
import { TblArticle } from '../../app/models/tbl-article.model';
import { ProfilePage } from '../profile/profile.page';
import { HelpersService } from '../../app/core/services/helpers.service';
import { TblPickupApi } from '../../app/core/http/tbl-pickup.api';
import { TblPickup } from '../../app/models/tbl-pickup.model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  segmentItems: ScrollableSegmentItem[];
  selectedSegmentItem: ScrollableSegmentItem;
  articleLayout: string;
  articles: TblArticle[];
  pickups: TblPickup[];
  searchTerm: string;
  didSearch: boolean;

  constructor(public navCtrl: NavController,
              private tblCategoryApi: TblCategoryApi,
              private tblArticleApi: TblArticleApi,
              private tblPickupApi: TblPickupApi,
              private helpersService: HelpersService) {
  }

  ionViewDidLoad() {
    this.segmentItems = [
      {
        value: "ranking",
        label: "ランキング"
      },
      {
        value: "pickup",
        label: "特集一覧"
      }
    ];
    this.articleLayout = 'ranking';
    this.articles = [];
    this.pickups = [];
    this.searchTerm = '';
    this.didSearch = false;

    // Fetch article for 1st tab (ranking)
    this.selectedSegmentItem = this.segmentItems[0];
    this.onSegmentItemSelected(this.selectedSegmentItem);

    // Fetch list of categories and append it to the list of segments
    this.tblCategoryApi.all().subscribe((res: any) => {
      if (res.data.length > 0) {
        res.data.map((o: any) => {
          this.segmentItems.push({
            value: o.id,
            label: o.attributes.category_name
          })
        });
      }
    });
  }

  onSegmentItemSelected(item: any) {
    this.selectedSegmentItem = item;

    if (item.value === 'ranking') {
      this.articleLayout = 'ranking';
      this.getArticlesByRanking();
    } else if (item.value === 'pickup') {
      this.articleLayout = 'pickup';
      this.getArticlesByPickUp();
    } else {
      this.articleLayout = 'list';
      this.getArticlesByCategoryId(item.value);
    }
  }

  goToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  onSearchSuccess(res: any) {
    this.didSearch = true;

    if (this.isViewingPickupContent) {
      this.pickups = this.helpersService.transformPickupApiResults(res);
    } else {
      this.articles = this.helpersService.transformArticleApiResults(res);
    }
  }

  get isViewingPickupContent() :boolean {
    return this.articleLayout === 'pickup'
  }

  get hasResults(): boolean {
    return this.articles.length > 0;
  }

  private getArticlesByRanking() {
    this.tblArticleApi.findByRanking({per_page: 20})
      .subscribe((res: any) => this.onSearchSuccess(res));
  }

  private getArticlesByPickUp() {
    this.tblPickupApi.all()
      .subscribe((res: any) => this.onSearchSuccess(res));
  }

  private getArticlesByCategoryId(categoryId: string | number) {
    this.tblArticleApi.all({tbl_category_id: categoryId, per_page: 100})
      .subscribe((res: any) => this.onSearchSuccess(res));
  }
}
