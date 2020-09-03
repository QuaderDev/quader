import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'main-wrapper',
  templateUrl: 'main-wrapper.component.html',
  styleUrls: ['main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {

  public hideAnimation: boolean;
  public showMenu: boolean;
  public fullGetIn: boolean;
  public hideBackground: boolean;
 
  public initStep: number = 1;
  public lastStep: number = 6;

  private animationCounter: number;

  constructor(private router: Router) {
    this.hideAnimation = false;
    this.showMenu = false;
    this.hideBackground = true;
   }

  ngOnInit(): void {
    setTimeout(() => { this.scrolling(); }
        , 1000);

    setTimeout(() => { this.hideMainAnimationLayer() }
        , 5000);

    setTimeout(() => { this.showMenuButton() }
        , 5000);

    setTimeout(() => { this.hideContainerBackground() }
        , 7000);

    setTimeout(() => { this.hideContainerBackground() }
        , 7000);
  }

  scrolling() {
    (() => {
      "use strict";
      /*[pan and well CSS scrolls]*/
      let pnls = document.querySelectorAll('.panel').length,
        scdir, hold = false;

      function _scrollY(obj) {
        let slength;
        let plength: any;
        let pan;
        let step = 100;
        let vh: string | number = window.innerHeight / 100;
        let vmin: string | number = Math.min(window.innerHeight, window.innerWidth) / 100;

        // var slength, plength, pan, step = 100,
        //   vh = window.innerHeight / 100,
        //   vmin = Math.min(window.innerHeight, window.innerWidth) / 100;

        if ((this !== undefined && this.id === 'main-scroller') || (obj !== undefined && obj.id === 'main-scroller')) {
          pan = this || obj;
          plength = parseInt(String(pan.offsetHeight / vh));
        }
        if (pan === undefined) {
          return;
        }
        plength = plength || parseInt(String(pan.offsetHeight / vmin));
        slength = parseInt(pan.style.transform.replace('translateY(', ''));
        if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
          slength = slength - step;
        } else if (scdir === 'down' && slength < 0) {
          slength = slength + step;
        } else if (scdir === 'top') {
          slength = 0;
        }
        if (hold === false) {
          hold = true;
          pan.style.transform = 'translateY(' + slength + 'vh)';
          setTimeout(function() {
            hold = false;
          }, 1000);
        }
      }
      /*[swipe detection on touchscreen devices]*/
      function _swipe(obj) {
        let swdir,
          sX,
          sY,
          dX,
          dY,
          threshold = 200,
          /*[min distance traveled to be considered swipe]*/
          slack = 50,
          /*[max distance allowed at the same time in perpendicular direction]*/
          alT = 500,
          /*[max time allowed to travel that distance]*/
          elT, /*[elapsed time]*/
          stT; /*[start time]*/
        obj.addEventListener('touchstart', function(e) {
          let tchs = e.changedTouches[0];
          swdir = 'none';
          sX = tchs.pageX;
          sY = tchs.pageY;
          stT = new Date().getTime();
          e.preventDefault();
        }, false);

        obj.addEventListener('touchmove', function(e) {
          e.preventDefault(); /*[prevent scrolling when inside DIV]*/
        }, false);

        obj.addEventListener('touchend', function(e) {
          let tchs = e.changedTouches[0];
          dX = tchs.pageX - sX;
          dY = tchs.pageY - sY;
          elT = new Date().getTime() - stT;
          if (elT <= alT) {
            if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
              swdir = (dX < 0) ? 'left' : 'right';
            } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
              swdir = (dY < 0) ? 'up' : 'down';
            }
            if (obj.id === 'main-scroller') {
              if (swdir === 'up') {
              
                scdir = swdir;
                _scrollY(obj);
              } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
                scdir = swdir;
                
                _scrollY(obj);

              }
              e.stopPropagation();
            }
          }
        }, false);
      }
      /*[assignments]*/
      let well = document.getElementById('main-scroller');
      well.style.transform = 'translateY(0)';
      well.addEventListener('wheel', function(e) {
        if (e.deltaY < 0) {
          scdir = 'down';
          indicatorScrolling(this.initStep++);
        }
        if (e.deltaY > 0) {
          scdir = 'up';
          console.log('down');
          this.indicatorScrolling(this.initStep--);
        }

        e.stopPropagation();
      });
      well.addEventListener('wheel', _scrollY);
      _swipe(well);
      let tops = document.querySelectorAll('.top');
      for (let i = 0; i < tops.length; i++) {
        tops[i].addEventListener('click', function() {
          scdir = 'top';
          _scrollY(well);
        });
      }
    })();
  }

  hideMainAnimationLayer() {
    this.hideAnimation = true;
    this.animationCounter++;
  }

  hideContainerBackground() {
    this.hideBackground = !this.hideBackground;
  }

  showMenuButton() {
    this.showMenu = true;
  }

  over() {
    this.fullGetIn = true;
  };

  out() {
    this.fullGetIn = false;
  };

  goTo(path: string):void {
    this.router.navigateByUrl(path);
  }

  indicatorScrolling(step) {
    console.log(step);
  }

}
