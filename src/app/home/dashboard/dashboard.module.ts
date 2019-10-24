import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapviewComponent } from './mapview/mapview.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  imports: [FlexLayoutModule],
  declarations: [DashboardComponent, MapviewComponent],
  providers: [],
  exports: [DashboardComponent]
})

export class DashboardModule {

}
