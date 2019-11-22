import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

// import { Data } from '../../../../assets/reportsdata';
import { SearchState } from '../store/reports.reducer';
import { searchdata, AddVehicle } from '../store/reports.selector';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit, OnDestroy {
  vehicleData =[] ;
  columns = [];
  Data =[];

  private readonly destroyed$ = new Subject<boolean>();

  constructor(private store: Store<SearchState>,private changeDetector: ChangeDetectorRef) {
  //  this.vehicleData = Data;
  this.store.select(AddVehicle).pipe(takeUntil(this.destroyed$)).subscribe(data => {
    this.vehicleData = data;
  });

  this.store.select(searchdata).pipe(takeUntil(this.destroyed$)).subscribe(data => {
     // this.vehicleData = this.Data;
      this.vehicleData = this.vehicleData && this.vehicleData.filter(row => {
        return (JSON.stringify(row).toLowerCase().indexOf(data) > -1);
      });
      if (this.vehicleData.length === 0) {
       // this.vehicleData = this.Data;
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
