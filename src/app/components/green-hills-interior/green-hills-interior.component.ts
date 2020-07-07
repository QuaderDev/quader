import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-green-hills-interior',
  templateUrl: './green-hills-interior.component.html',
  styleUrls: ['./green-hills-interior.component.scss']
})
export class GreenHillsInteriorComponent {
  teamImgUrl: string = 'assets/images/green-hills/green-hills-team.png';
  styleImgUrl: string ='assets/images/green-hills/green-hills-style.png';
  designImgUrl: string ='assets/images/green-hills/green-hills-design.png';
  atmoImgUrl1: string ='assets/images/green-hills/green-hills-atmo-1.png';
  atmoImgUrl2: string ='assets/images/green-hills/green-hills-atmo-2.png';
  atmoImgUrl3: string ='assets/images/green-hills/green-hills-atmo-3.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) { }

}
