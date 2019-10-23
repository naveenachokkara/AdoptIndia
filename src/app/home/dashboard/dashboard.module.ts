import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
  ];


@NgModule({
  imports: [FlexLayoutModule],
declarations:[DashboardComponent],
providers:[],
exports:[DashboardComponent]
})

export class DashboardModule {

}
