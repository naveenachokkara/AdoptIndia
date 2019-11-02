import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapviewComponent } from './mapview/mapview.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';


import { ReportsComponent } from './reports/reports.component';
import { MatSelectModule, MatIconModule } from '@angular/material';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  imports: [FlexLayoutModule, LeafletModule, CommonModule, MatFormFieldModule, MatTabsModule,MatSelectModule,MatIconModule ],
  declarations: [DashboardComponent, MapviewComponent, ReportsComponent],
  providers: [],
  exports: [DashboardComponent, MapviewComponent, ReportsComponent]
})

export class DashboardModule {

}
