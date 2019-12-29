import { Component, OnInit } from '@angular/core';

import { Data } from '../../../../assets/reportsdata';
import { Store } from '@ngrx/store';
import { SearchState } from '../../Reports/store/reports.reducer';
import { searchdata } from '../../Reports/store/reports.selector';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehiclehistory.component.html',
  styleUrls: ['./vehiclehistory.component.css']
})
export class VehicleHistoryComponent implements OnInit {
  vehicleData = [];
  columns = [];
  isHistoric = true;
  private readonly destroyed$ = new Subject<boolean>();
  constructor(private store: Store<SearchState>) {
    this.vehicleData = Data;
    this.store.select(searchdata).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      // this.historyData = this.total;
      this.vehicleData = this.vehicleData && this.vehicleData.filter(row => {
        return (JSON.stringify(row).toLowerCase().indexOf(data) > -1);
      });
      if (this.vehicleData.length === 0) {
        // this.vehicleData = this.Data;
      }
    });
   }

  ngOnInit() {
    this.columns = [
      { prop: 'regNumber', name: 'Reg Number' },
      { prop: 'vehicleType', name: 'Vehicle Type' },
      { prop: 'VehicleBrand', name: 'Vehicle Brand' },
      { prop: 'mfgDate', name: 'Mfg Date' },
      { prop: 'engineNumber', name: 'Engine Number' },
      { prop: 'insurance', name: 'Insurance' },
      { prop: 'VendorName', name: 'Vendor Name' },
      { prop: 'topSpeed', name: 'Top Speed' },
      { prop: 'location', name: 'Location' },
      { prop: 'documents', name: 'Documents' }
    ];
  }

}
