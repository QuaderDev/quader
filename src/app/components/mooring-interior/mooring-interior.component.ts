import { Component, OnInit } from '@angular/core';

import { Location} from '@angular/common';

@Component({
  selector: 'app-mooring-interior',
  templateUrl: './mooring-interior.component.html',
  styleUrls: ['./mooring-interior.component.scss']
})
export class MooringInteriorComponent {
  teamImgUrl: any = 'assets/images/mooring/mooring_interior-team.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';
  diffImgUrl: string = 'assets/images/mooring/mooring_interior-differ.png';
  seeImgUrl1: string = 'assets/images/mooring/mooring_interior-see.png';
  seeImgUrl2: string = 'assets/images/mooring/mooring_interior-feel-1.png';
  feelImgUrl: string = 'assets/images/mooring/mooring_interior-feel-2.png';
  constructor(public _location: Location) { }

}
