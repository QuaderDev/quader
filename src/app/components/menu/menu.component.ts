import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  @Output() hideMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  hideMenuHandler() {
    this.hideMenuEmitter.emit(true);
  }

  goTo(path: string):void {
    this.router.navigateByUrl(path);
  }

}
