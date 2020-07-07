import { Component, OnInit } from '@angular/core';

import { Location} from '@angular/common';

@Component({
  selector: 'app-mooring-interior',
  templateUrl: './mooring-interior.component.html',
  styleUrls: ['./mooring-interior.component.scss']
})
export class MooringInteriorComponent {
  teamImgUrl: string = 'assets/images/mooring/mooring-interior-team.png';
  headerImgUrl: string = 'assets/images/mooring/mooring-interior-header.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  constructor(public _location: Location) { }

}
