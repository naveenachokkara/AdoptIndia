import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput, MatDatepicker } from '@angular/material';
import { Moment } from 'moment';

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

  @ViewChild('fromdate', {
    read: MatInput
  }) fromdate: MatInput;

  @ViewChild('todate', {
    read: MatInput
  }) todate: MatInput;

  constructor() { }

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

  onSearch(){
    
  }

}
