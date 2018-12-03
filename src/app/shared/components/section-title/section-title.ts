import { Component, Input } from '@angular/core';


@Component({
  selector: 'section-title',
  templateUrl: 'section-title.html'
})
export class SectionTitleComponent {

  @Input() text: string;

  constructor() {
  }

}
