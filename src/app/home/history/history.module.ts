import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HistoryComponent } from './history.component';
import { DriverHistoryComponent } from './driverhistory/driverhistory.component';
import { VehicleHistoryComponent } from './vehiclehistory/vehiclehistory.component';
import { SubHistoryComponent } from './sub-history/sub-history.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: HistoryComponent, children: [
      { path: 'vehicles', component: VehicleHistoryComponent },
      { path: 'drivers', component: DriverHistoryComponent },
      { path: '', component: SubHistoryComponent }
    ]
  }
];

@NgModule({
  declarations: [HistoryComponent, DriverHistoryComponent, VehicleHistoryComponent, SubHistoryComponent],
  imports: [
    CommonModule, MatTabsModule, MatIconModule, RouterModule, NgxDatatableModule, MatCheckboxModule,
    MatSelectModule,MatDatepickerModule,ReactiveFormsModule ,
    MatInputModule, RouterModule.forChild(routes)
  ]
})
export class HistoryModule { }
