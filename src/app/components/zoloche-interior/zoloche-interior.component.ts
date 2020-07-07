import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-zoloche-interior',
  templateUrl: './zoloche-interior.component.html',
  styleUrls: ['./zoloche-interior.component.scss']
})
export class ZolocheInteriorComponent {
  teamImgUrl: string = 'assets/images/zoloche-interior/zoloche-interior-team.png';
  atmoImgUrl: string = 'assets/images/zoloche-interior/zoloche-interior-atmo.png';
  excImgUrl: string = 'assets/images/zoloche-interior/zoloche-interior-excited.png';
  feelImgUrl: string = 'assets/images/zoloche-interior/zoloche-interior-feel.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) {}

}
