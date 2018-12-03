import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TblArticle } from '../../app/models/tbl-article.model';
import { SearchService } from '../../app/core/services/search.service';
import { HelpersService } from '../../app/core/services/helpers.service';


@Component({
  selector: 'page-search',
  templateUrl: 'search.page.html',
})
export class SearchPage {

  articles: TblArticle[];
  recentSearchTerms: string[];
  searchTerm: string;
  didSearch: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private searchService: SearchService,
              private helpersService: HelpersService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');

    this.articles = [];
    this.didSearch = false;
    this.searchService.recentSearchTerms$.subscribe(value => this.recentSearchTerms = value);

    // TODO:
    // 1. Search theo tu tim kiem gan day
    // 2. Search theo tu tim kiem pho bien
  }

  onSearchSuccess(outputData: any) {
    this.didSearch = true;
    this.articles = this.helpersService.transformArticleApiResults(outputData);
  }

  onSearchTermEmpty() {
    this.didSearch = false;
    this.articles = [];
  }

  doSearch(term: string) {
    this.searchTerm = term;
  }

  get hasResults() {
    return this.articles.length > 0;
  }
}
