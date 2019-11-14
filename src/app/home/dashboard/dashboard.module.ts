import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MapviewComponent } from './mapview/mapview.component';
import { ReportsComponent } from './reports/reports.component';
import { TableComponent } from './table/table.component';
import { MatSelectModule, MatIconModule } from '@angular/material';
import { PiechartReportComponent } from './piechart-report/piechart-report.component';

@NgModule({
  imports: [FlexLayoutModule, LeafletModule, CommonModule, MatFormFieldModule, NgxDatatableModule,
    MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule],
  declarations: [DashboardComponent, MapviewComponent, ReportsComponent, TableComponent, PiechartReportComponent],
  providers: [],
  exports: [DashboardComponent, MapviewComponent, ReportsComponent, TableComponent]
})

export class DashboardModule {

}
