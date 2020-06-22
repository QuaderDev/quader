import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'app-river-house',
  templateUrl: './river-house.component.html',
  styleUrls: ['./river-house.component.scss']
})
export class RiverHouseComponent {

  constructor(public _location: Location) {
  }

}
