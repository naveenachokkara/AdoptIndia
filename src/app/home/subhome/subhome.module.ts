import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { SubhomeComponent } from './subhome.component';
import { DashboardModule } from './../dashboard/dashboard.module';

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
