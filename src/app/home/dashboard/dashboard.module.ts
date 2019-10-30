import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapviewComponent } from './mapview/mapview.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  imports: [FlexLayoutModule,LeafletModule,CommonModule],
declarations:[DashboardComponent, MapviewComponent],
providers:[],
exports:[DashboardComponent,MapviewComponent]
})

export class DashboardModule {

}
