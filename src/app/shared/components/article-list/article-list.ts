import { Component, Input, OnInit } from '@angular/core';
import { TblArticle } from '../../../models/tbl-article.model';
import { environment } from '@environment';

@Component({
  selector: 'article-list',
  templateUrl: 'article-list.html'
})
export class ArticleListComponent implements OnInit {

  @Input() layout: string;
  @Input() articles: TblArticle[];
  rankingLabelColors: string[];
  staticAssetsEndpoint: string = environment.STATIC_ASSETS_ENDPOINT;

  constructor() {
    console.log('Hello ArticleListComponent Component');
  }

  ngOnInit() {
    this.rankingLabelColors = [
      '#D8C36C',
      '#C2C3C6',
      '#9D6A6F',
      '#111'
    ];
  }
}
