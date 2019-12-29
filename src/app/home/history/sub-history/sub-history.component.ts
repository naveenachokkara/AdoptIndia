import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Data } from '../../../../assets/reportsdata';
import { SearchState } from '../../Reports/store/reports.reducer';
import { Store } from '@ngrx/store';
import { searchdata } from '../../Reports/store/reports.selector';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sub-history',
  templateUrl: './sub-history.component.html',
  styleUrls: ['./sub-history.component.css']
})
export class SubHistoryComponent implements OnInit, OnDestroy {
  historyData = [];
  columns = [];
  isHistoric= true;
  totalData =[];
  private readonly destroyed$ = new Subject<boolean>();
  constructor(private store: Store<SearchState>, private changeDetector: ChangeDetectorRef) {
  this.historyData = Data;
  this.store.select(searchdata).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      // this.historyData = this.total;
      this.historyData = this.historyData && this.historyData.filter(row => {
        return (JSON.stringify(row).toLowerCase().indexOf(data) > -1);
      });
      if (this.historyData.length === 0) {
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

    //dispatch an action to store to save history data  
   // this.store.dispatch(new AddVehicle(newRow));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
