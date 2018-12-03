import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScrollableSegmentItem } from './scrollable-segment-item.model';

@Component({
  selector: 'scrollable-segment',
  templateUrl: './scrollable-segment.component.html',
})
export class ScrollableSegmentComponent implements OnInit {

  @Input() items: ScrollableSegmentItem[];
  @Output() onIonSelect: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectItem(item: ScrollableSegmentItem) {
    this.onIonSelect.emit(item)
  }
}
