import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-animation',
  templateUrl: 'main-animation.component.html',
  styleUrls: ['main-animation.scss']
})
export class MainAnimationComponent implements OnInit {
  animateLogo;
  animateBox;
  animateTitle;
  logoFadeOut;

  constructor() {
    this.animateLogo = false;
    this.animateBox = false;
    this.animateTitle = false;
    this.logoFadeOut = false;
  }

  ngOnInit() {
    this.initAnimation();
  }

  initAnimation() {
    setTimeout(() => {
      this.animateLogo = !this.animateLogo;
      this.animateBox = !this.animateBox;
      this.animateTitle = !this.animateTitle;
    }, 0);
    setTimeout(()=> {
      this.logoFadeOut = !this.logoFadeOut;
    }, 3500);
  }

}
