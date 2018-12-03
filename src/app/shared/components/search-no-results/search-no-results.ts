import { Component } from '@angular/core';

/**
 * Generated class for the SearchNoResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-no-results',
  templateUrl: 'search-no-results.html'
})
export class SearchNoResultsComponent {

  text: string;

  constructor() {
    console.log('Hello SearchNoResultsComponent Component');
    this.text = 'Hello World';
  }

}
