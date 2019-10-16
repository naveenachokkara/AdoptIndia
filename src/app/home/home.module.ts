import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


const routes: Routes=[
  {path:'dashboard', component: DashboardComponent}
]
@NgModule({
  imports:[],
  declarations:[],
  providers:[],
  exports:[]
});
