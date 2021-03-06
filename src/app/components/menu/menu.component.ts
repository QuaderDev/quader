import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{

  @Output() hideMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        const a = document.querySelector('#' + fragment).scrollIntoView(true);
      }
    });
  }

  hideMenuHandler() {
    this.hideMenuEmitter.emit(true);
  }

  goTo(path: string):void {
    this.router.navigateByUrl(path);
  }

}
