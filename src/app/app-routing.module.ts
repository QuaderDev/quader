import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAnimationComponent } from './components/main-animation/main-animation.component';


const routes: Routes = [
  { path: '', component: MainAnimationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
