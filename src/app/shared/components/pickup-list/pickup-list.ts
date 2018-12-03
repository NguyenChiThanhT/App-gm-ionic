import { Component, Input, OnInit } from '@angular/core';
import { TblPickup } from '../../../models/tbl-pickup.model';
import { environment } from '@environment';


@Component({
  selector: 'pickup-list',
  templateUrl: 'pickup-list.html'
})
export class PickupListComponent implements OnInit {

  @Input() pickups: TblPickup[];
  staticAssetsEndpoint: string = environment.STATIC_ASSETS_ENDPOINT;

  constructor() {
    console.log('Hello PickupListComponent Component');
  }

  ngOnInit() {

  }
}
