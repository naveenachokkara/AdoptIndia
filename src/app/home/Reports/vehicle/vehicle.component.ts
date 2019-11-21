import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Data } from '../../../../assets/reportsdata';
import { SearchState } from '../store/reports.reducer';
import { searchdata } from '../store/reports.selector';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit, OnDestroy {
  vehicleData;
  columns = [];

  private readonly destroyed$ = new Subject<boolean>();

  constructor(private store: Store<SearchState>) {
    this.vehicleData = Data;

    this.store.select(searchdata).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.vehicleData = Data;
      this.vehicleData = this.vehicleData.filter(row => {
        return (JSON.stringify(row).toLowerCase().indexOf(data) > -1);
      });
      if (this.vehicleData.length === 0) {
        this.vehicleData = Data;
      }
    });

    // const val = this.getState(this.store);
    // this.vehicleData = this.vehicleData.filter(row => {
    //   return (JSON.stringify(row).toLowerCase().indexOf(val.reportsSearch.SearchingData) > -1);
    // });
    // console.log(this.vehicleData);
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

  // getState(store: Store<SearchState>): SearchState {
  //   let state: SearchState;

  //   store.subscribe(s => state = s);

  //   return state;
  // }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
