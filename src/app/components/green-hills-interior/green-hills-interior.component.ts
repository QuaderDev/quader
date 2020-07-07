import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-green-hills-interior',
  templateUrl: './green-hills-interior.component.html',
  styleUrls: ['./green-hills-interior.component.scss']
})
export class GreenHillsInteriorComponent {
  teamImgUrl: string = 'assets/images/green-hills/green-hills-team.png';
  headerImgUrl: string = 'assets/images/green-hills/green-hills-header.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) { }

}
