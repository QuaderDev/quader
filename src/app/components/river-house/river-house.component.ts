import {Component} from '@angular/core';

import { Location} from '@angular/common';

@Component({
  selector: 'app-river-house',
  templateUrl: './river-house.component.html',
  styleUrls: ['./river-house.component.scss']
})
export class RiverHouseComponent {
  teamImgUrl: any  = 'assets/images/river-house/riverhouse-team-img.png';
  seeImgUrl: any = 'assets/images/river-house/river-house-see-img.png';
  feelImgUrl: any = 'assets/images/river-house/river-house-feel-img.png';
  understandTopImgUrl: any = 'assets/images/river-house/river-house-understand-top-img.png';
  understandBotImgUrl: any = 'assets/images/river-house/river-house-understand-bottom-img.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) {
  }

}
