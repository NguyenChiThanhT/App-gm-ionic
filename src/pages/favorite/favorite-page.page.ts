import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TblArticle } from "../../app/models/tbl-article.model";
import { HelpersService } from "../../app/core/services/helpers.service";
import { TblArticleApi } from "../../app/core/http/tbl-article.api";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite-page.page.html',
})
export class FavoritePage {
  selectedSegment: string = 'favorite';
  articles: TblArticle[];
  searchTerm: string = '';
  didSearch: boolean;
  articlesTemp: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private helpersService: HelpersService,
    private tblArticleApi: TblArticleApi,
    private storage: Storage
  ) {

  }

  ionViewDidLoad() {
    this.articles = [];
    this.didSearch = false;
    this.getArticlesByRanking();
    this.getStorageArticles();
  }

  onSearchTermChanged() {
    this.didSearch = true;
    const val = this.searchTerm;
    if (val && val.trim() != '') {
      this.articles = this.articlesTemp.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getArticlesByRanking();
    }
  }

  // call api test
  getArticlesByRanking() {
    this.tblArticleApi.findByRanking({per_page: 20})
      .subscribe((res: any) => {
        this.articles = this.helpersService.transformArticleApiResults(res);
        this.storage.set("SET-ARTICLES", this.articles);
      });
  }

  // get a key/value pair storage
  getStorageArticles() {
    this.storage.get("SET-ARTICLES").then(val => {
      this.articlesTemp = val;
    })
  }

  get hasResults(): boolean {
    return this.articles.length > 0;
  }
}
