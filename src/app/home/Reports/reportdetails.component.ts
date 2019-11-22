import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { SearchState } from './store/reports.reducer';
import { Search, AddVehicle ,AddDriver } from './store/reports.action';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.scss']
})
export class ReportdetailsComponent implements OnInit {
  tabs = [{ name: 'Drivers', route: './' }, { name: 'Vehicles', route: './vehicles' }];
  @ViewChild('searchInput') searchInput: ElementRef ;
  constructor(private store: Store<SearchState> , private router: Router) {
    router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
    this.searchInput.nativeElement.value = '';
    this.store.dispatch(new Search(''));
    }
    });
  }

  ngOnInit() {
  }

  onSearch(event: any) {
  // console.log(this.router.url);
    const val = (event && event.target && event.target.value) ? event.target.value.toLowerCase() : '';
    this.store.dispatch(new Search(val));
  }

  onAddRow() {
      const newRow = {
        regNumber : 'TN123456',
        vehicleType : 'car',
        VehicleBrand : 'xyz',
        mfgDate : 'jan 2019',
        engineNumber : '123456',
        insurance : 'ICIC394683947',
        VendorName: 'John',
        topSpeed : '120km/h',
        location: 'Visakhapatnam'
      };
      if (this.router.url.includes('vehicles')) {
        this.store.dispatch(new AddVehicle(newRow));
      } else {
        this.store.dispatch(new AddDriver(newRow));
      }


  }

}
