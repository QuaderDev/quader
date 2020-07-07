import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-zoloche-interior',
  templateUrl: './zoloche-interior.component.html',
  styleUrls: ['./zoloche-interior.component.scss']
})
export class ZolocheInteriorComponent {
  teamImgUrl: string = 'assets/images/zoloche-interior/zoloche-interior-team.png';
  headerImgUrl: string = 'assets/images/zoloche-interior/zoloche-interior-header.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) { }

}
