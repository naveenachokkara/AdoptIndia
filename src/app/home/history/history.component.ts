import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput, MatDatepicker } from '@angular/material';
import { Moment } from 'moment';
import { Store } from '@ngrx/store';
import { SearchState } from '../Reports/store/reports.reducer';
import { Search } from '../Reports/store/reports.action';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  tabs = [{ name: 'History', route: './' }, { name: 'Drivers', route: './drivers' }, { name: 'Vehicles', route: './vehicles' }];
  date = null;
  selectedreporttype = null;
  selectedvehicletype = null;
  vehicles =['car','bus'];
  reportType= ['Four Wheeler','Two wheeler'];

  @ViewChild('fromdate', {
    read: MatInput
  }) fromdate: MatInput;

  @ViewChild('todate', {
    read: MatInput
  }) todate: MatInput;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private store: Store<SearchState>, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.searchInput.nativeElement.value = '';
        this.store.dispatch(new Search(''));
      }
    });
   }

  ngOnInit() {
    this.date = new FormControl(new Date());
    const serializedDate = new FormControl((new Date()).toISOString());
  }

  onResetFilter() {
    this.fromdate.value = '';
    this.todate.value = '';
    this.selectedreporttype = null;
    this.selectedvehicletype = null;
  }

  onSearch(event: any) {
    const val = (event && event.target && event.target.value) ? event.target.value.toLowerCase() : '';
    this.store.dispatch(new Search(val));
  }

  onChange(event: any){

  }

}
