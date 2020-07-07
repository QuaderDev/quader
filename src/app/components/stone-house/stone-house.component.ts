import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-stone-house',
  templateUrl: './stone-house.component.html',
  styleUrls: ['./stone-house.component.scss'],
})
export class StoneHouseComponent{

  teamImgUrl: any  = 'assets/images/stone-house/stone-house-team-img.png';
  styleImgUrl1: any = 'assets/images/stone-house/stone-house-style-1.png';
  styleImgUrl2: any = 'assets/images/stone-house/stone-house-style-2.png';
  spaceImgUrl1: any = 'assets/images/stone-house/stone-house-space-1.png';
  spaceImgUrl2: any = 'assets/images/stone-house/stone-house-space-2.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) { }

}
