import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  @Output() hideMenuEmitter = new EventEmitter<boolean>();

  constructor() {
  }

  hideMenuHandler() {
    this.hideMenuEmitter.emit(true);
  }

}
