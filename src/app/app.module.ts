import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MainAnimationComponent } from './components/main-animation/main-animation.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { MenuComponent } from './components/menu/menu.component';

import {MatSidenavModule} from "@angular/material/sidenav";
import { RiverHouseComponent } from './components/river-house/river-house.component';



@NgModule({
  declarations: [
    AppComponent,
    MainAnimationComponent,
    MainWrapperComponent,
    MenuComponent,
    RiverHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
