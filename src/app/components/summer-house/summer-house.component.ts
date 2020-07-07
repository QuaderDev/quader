import { Component, OnInit } from '@angular/core';

import { Location} from '@angular/common';

@Component({
  selector: 'app-summer-house',
  templateUrl: './summer-house.component.html',
  styleUrls: ['./summer-house.component.scss']
})
export class SummerHouseComponent {
  airImgUrl1: string = 'assets/images/summer-house/summer-house-';
  airImgUrl2: string = 'assets/images/summer-house/summer-house-';
  headerImgUrl: string = 'assets/images/summer-house/summer-house-header.png';
  natureImgUrl: string = 'assets/images/summer-house/summer-house-';
  restImgUrl: string = 'assets/images/summer-house/summer-house-';
  teamImgUrl: string = 'assets/images/summer-house/summer-house-team.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) { }

}
