import {Component, OnInit} from '@angular/core';

import {Location} from '@angular/common';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "@kolkov/ngx-gallery";

@Component({
  selector: 'app-river-house',
  templateUrl: './river-house.component.html',
  styleUrls: ['./river-house.component.scss']
})
export class RiverHouseComponent implements OnInit {
  teamImgUrl: any = 'assets/images/river-house/riverhouse-team-img.png';
  seeImgUrl: any = 'assets/images/river-house/river-house-see-img.png';
  feelImgUrl: any = 'assets/images/river-house/river-house-feel-img.png';
  understandTopImgUrl: any = 'assets/images/river-house/river-house-understand-top-img.png';
  understandBotImgUrl: any = 'assets/images/river-house/river-house-understand-bottom-img.png';
  backToImgUrl: any = 'assets/images/back-to-img.png';

  showCarousel = false;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(public _location: Location) {
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        fullWidth: true,
        // width: '500px',
        height: '400px',
        imageAnimation: NgxGalleryAnimation.Slide,
        lazyLoading: true,
        thumbnails: false,
        closeIcon: 'fa fa-times-circle',
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        previewArrows: true,
        previewCloseOnClick: true,
        previewFullscreen: true,
        previewCloseOnEsc: true,
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/river-house/riverhouse-team-img.png',
        medium: 'assets/images/river-house/riverhouse-team-img.png',
        big: 'assets/images/river-house/riverhouse-team-img.png'
      },
      {
        small: 'assets/images/river-house/riverhouse-team-img.png',
        medium: 'assets/images/river-house/riverhouse-team-img.png',
        big: 'assets/images/river-house/riverhouse-team-img.png'
      }
    ]
  }

  showCarouselModal() {
    this.showCarousel = true;
  }

}
