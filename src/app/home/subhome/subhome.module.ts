import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { SubhomeComponent } from './subhome.component';
import { DashboardModule } from './../dashboard/dashboard.module';

const routes: Routes = [
  {path: 'Home', component: SubhomeComponent}
  ];


@NgModule({
  imports: [FlexLayoutModule,
    LeafletModule,
    DashboardModule],
declarations:[SubhomeComponent],
providers:[],
exports:[SubhomeComponent]
})

export class SubhomeModule {

}
