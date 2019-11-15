import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { InlineSVGModule } from 'ng-inline-svg';

import { ReportdetailsComponent } from './reportdetails.component';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomtableComponent } from './customtable/customtable.component';

const routes: Routes = [
  {
    path: '', component: ReportdetailsComponent, children: [
      { path: 'vehicles', component: VehicleComponent },
      { path: '', component: DriverComponent }
    ]
  }
];
@NgModule({
  imports: [CommonModule, MatTabsModule, MatIconModule, RouterModule, NgxDatatableModule ,RouterModule.forChild(routes)],
  declarations: [ReportdetailsComponent, DriverComponent, VehicleComponent,CustomtableComponent],
  providers: [],
  exports: [ReportdetailsComponent]
})
export class ReportsModule {

}
