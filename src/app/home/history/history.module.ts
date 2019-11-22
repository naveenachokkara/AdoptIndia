import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HistoryComponent } from './history.component';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SubHistoryComponent } from './sub-history/sub-history.component';

const routes: Routes = [
  {
    path: '', component: HistoryComponent, children: [
      { path: 'vehicles', component: VehicleComponent },
      { path: 'drivers', component: DriverComponent },
      { path: '', component: SubHistoryComponent }
    ]
  }
];

@NgModule({
  declarations: [HistoryComponent, DriverComponent, VehicleComponent, SubHistoryComponent],
  imports: [
    CommonModule, MatTabsModule, MatIconModule, RouterModule, NgxDatatableModule, MatCheckboxModule,
    MatInputModule, RouterModule.forChild(routes)
  ]
})
export class HistoryModule { }
