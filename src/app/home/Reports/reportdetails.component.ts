import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { SearchState } from './store/reports.reducer';
import { Search } from './store/reports.action';

@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.scss']
})
export class ReportdetailsComponent implements OnInit {
  tabs = [{ name: 'Drivers', route: './' }, { name: 'Vehicles', route: './vehicles' }];
  constructor(private store: Store<SearchState>) {

  }

  ngOnInit() {

  }

  onSearch(event: any) {
    const val = (event && event.target && event.target.value) ? event.target.value.toLowerCase() : '';
    this.store.dispatch(new Search(val));
  }

}
