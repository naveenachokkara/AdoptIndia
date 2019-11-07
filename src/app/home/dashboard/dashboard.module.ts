import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapviewComponent } from './mapview/mapview.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { ReportsComponent } from './reports/reports.component';
import { MatSelectModule, MatIconModule } from '@angular/material';
import { PiechartReportComponent } from './piechart-report/piechart-report.component';

@NgModule({
  imports: [FlexLayoutModule, LeafletModule, CommonModule, MatFormFieldModule,
    MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule],
  declarations: [DashboardComponent, MapviewComponent, ReportsComponent, PiechartReportComponent],
  providers: [],
  exports: [DashboardComponent, MapviewComponent, ReportsComponent]
})

export class DashboardModule {

}
