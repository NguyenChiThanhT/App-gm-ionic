import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';


@Component({
  selector: 'top-search-bar',
  templateUrl: 'top-search-bar.html'
})
export class TopSearchBarComponent implements OnChanges {

  @Input() searchTerm: string;
  @Output() onSearchSuccess: EventEmitter<any> = new EventEmitter();
  @Output() onSearchTermEmpty: EventEmitter<any> = new EventEmitter();

  constructor(private searchService: SearchService) {
    console.log('Hello TopSearchBarComponent Component');
  }

  /*
   * Will run everytime the input value changes
   */
  ngOnChanges(changes: SimpleChanges) {
    this.searchTerm = changes.searchTerm.currentValue;
    this.onSearchTermChanged();
  }

  onSearchTermChanged() {
    if (!this.searchTerm) {
      this.onSearchTermEmpty.emit();
      return false;
    }

    this.searchService.doSearch(this.searchTerm).subscribe((res: any) => {
      this.searchService.onSearchSuccess(this.searchTerm);
      this.onSearchSuccess.emit(res);
    });
  }
}
