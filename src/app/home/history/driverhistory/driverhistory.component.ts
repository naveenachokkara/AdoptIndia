import { Component, OnInit } from '@angular/core';
import { Data } from '../../../../assets/reportsdata';
import { Subject } from 'rxjs';
import { searchdata } from '../../Reports/store/reports.selector';
import { Store } from '@ngrx/store';
import { SearchState } from '../../Reports/store/reports.reducer';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-driver',
  templateUrl: './driverhistory.component.html',
  styleUrls: ['./driverhistory.component.css']
})
export class DriverHistoryComponent implements OnInit {
  isHistoric = true;
  driverHistory ;
  columns = [];
  private readonly destroyed$ = new Subject<boolean>();
  constructor(private store: Store<SearchState>) {
    this.driverHistory = Data;
    this.store.select(searchdata).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      // this.historyData = this.total;
      this.driverHistory = this.driverHistory && this.driverHistory.filter(row => {
        return (JSON.stringify(row).toLowerCase().indexOf(data) > -1);
      });
      if (this.driverHistory.length === 0) {
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
      {prop : 'topSpeed', name : 'Top Speed'},
      {prop: 'location', name : 'Location'},
      { prop: 'documents', name: 'Documents' }
    ];
    this.driverHistory = Data ;
  }


}
