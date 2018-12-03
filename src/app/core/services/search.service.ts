// Angular modules
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TblArticleApi } from '../http/tbl-article.api';


@Injectable()
export class SearchService {

  private _recentSearchTerms: BehaviorSubject<string[]>;
  recentSearchTerms$: Observable<string[]>;

  constructor(private storage: Storage,
              private tblArticleApi: TblArticleApi) {
    this._recentSearchTerms = new BehaviorSubject([]);
    this.recentSearchTerms$ = this._recentSearchTerms.asObservable();
    this.storage.get('RECENT_SEARCH_TERMS').then(val => {
      if (val) {
        this.changeRecentSearchTerms(val);
      }
    });
  }

  changeRecentSearchTerms(values: string[]) {
    this._recentSearchTerms.next(values);
  }

  doSearch(term: string) {
    return this.tblArticleApi.all({term: term});
  }

  onSearchSuccess(term: string) {
    // Save the last 5 recent keywords
    const terms: string[] = _.chain(this._recentSearchTerms.getValue())
      .union([term])
      .takeRight(5)
      .value();

    this.storage.set('RECENT_SEARCH_TERMS', terms);
    this.changeRecentSearchTerms(terms);
  }
}
