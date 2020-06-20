
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MainAnimationComponent } from './components/main-animation/main-animation.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import {RiverHouseComponent} from "./components/river-house/river-house.component";

const routes: Routes = [
  { path: '', component: MainWrapperComponent },
  {path: 'river-house', component: RiverHouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
