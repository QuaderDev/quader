import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import {RiverHouseComponent} from "./components/river-house/river-house.component";
import {AboutComponent} from "./components/about/about.component";
import {StoneHouseComponent} from "./components/stone-house/stone-house.component";
import {SummerHouseComponent} from "./components/summer-house/summer-house.component";
import {ZolocheInteriorComponent} from "./components/zoloche-interior/zoloche-interior.component";
import {GreenHillsInteriorComponent} from "./components/green-hills-interior/green-hills-interior.component";
import {MooringInteriorComponent} from "./components/mooring-interior/mooring-interior.component";

const routes: Routes = [
  { path: '', component: MainWrapperComponent },
  {path: 'river-house', component: RiverHouseComponent},
  {path: 'stone-house', component: StoneHouseComponent},
  {path: 'summer-house', component: SummerHouseComponent},
  {path: 'zoloche', component: ZolocheInteriorComponent},
  {path: 'green-hills', component: GreenHillsInteriorComponent},
  {path: 'mooring', component: MooringInteriorComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
