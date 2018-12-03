import { Component , Input, OnInit,  } from '@angular/core';



@Component({
  selector: 'mini-post-list',
  templateUrl: './mini-post-list.component.html',
})
export class MiniPostListComponent implements OnInit {

  @Input() posts: any;

  constructor() {
  }

  ngOnInit() {
  }
}
