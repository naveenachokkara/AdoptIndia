import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StoreModule } from '@ngrx/store';
// import { InlineSVGModule } from 'ng-inline-svg';

import { ReportdetailsComponent } from './reportdetails.component';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CustomtableComponent } from '../customtable/customtable.component';
import { reportsreducer } from './store/reports.reducer';

const routes: Routes = [
  {
    path: '', component: ReportdetailsComponent, children: [
      { path: 'vehicles', component: VehicleComponent },
      { path: '', component: DriverComponent }
    ]
  }
];
@NgModule({
  imports: [CommonModule, MatTabsModule, MatIconModule, RouterModule, NgxDatatableModule, MatCheckboxModule,
    MatInputModule, RouterModule.forChild(routes),
    StoreModule.forFeature('reports', reportsreducer)],
  declarations: [ReportdetailsComponent, DriverComponent, VehicleComponent, CustomtableComponent],
  providers: [],
  exports: [ReportdetailsComponent]
})
export class ReportsModule {

}
