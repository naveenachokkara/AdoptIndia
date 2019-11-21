import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Data } from '../../../../assets/reportsdata';
import { Store } from '@ngrx/store';
import { SearchState } from '../store/reports.reducer';
import { searchdata } from '../store/reports.selector';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit, OnDestroy {
 driverData ;
 columns =[];

 private readonly destroyed$ = new Subject<boolean>();

  constructor(private store: Store<SearchState>) {
    this.driverData = Data;

    this.store.select(searchdata).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.driverData = Data;
      this.driverData = this.driverData.filter(row => {
        return (JSON.stringify(row).toLowerCase().indexOf(data) > -1);
      });
      if (this.driverData.length === 0) {
        this.driverData = Data;
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
      {prop:'location', name :'Location'},
      { prop: 'documents', name: 'Documents' }
    ];
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
