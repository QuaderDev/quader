import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";

import { MainAnimationComponent } from './components/main-animation/main-animation.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { MenuComponent } from './components/menu/menu.component';
import { RiverHouseComponent } from './components/river-house/river-house.component';
import { AboutComponent } from "./components/about/about.component";
import { StoneHouseComponent } from './components/stone-house/stone-house.component';
import { SummerHouseComponent } from './components/summer-house/summer-house.component';
import { ZolocheInteriorComponent } from './components/zoloche-interior/zoloche-interior.component';
import { GreenHillsInteriorComponent } from './components/green-hills-interior/green-hills-interior.component';
import { MooringInteriorComponent } from './components/mooring-interior/mooring-interior.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';




@NgModule({
  declarations: [
    AppComponent,
    MainAnimationComponent,
    MainWrapperComponent,
    MenuComponent,
    RiverHouseComponent,
    AboutComponent,
    StoneHouseComponent,
    SummerHouseComponent,
    ZolocheInteriorComponent,
    GreenHillsInteriorComponent,
    MooringInteriorComponent,
    GetInTouchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
