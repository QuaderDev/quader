import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import {RiverHouseComponent} from "./components/river-house/river-house.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  { path: '', component: MainWrapperComponent },
  {path: 'river-house', component: RiverHouseComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
