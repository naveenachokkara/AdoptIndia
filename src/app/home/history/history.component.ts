import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  tabs = [{ name: 'History', route: './' }, { name: 'Drivers', route: './drivers' }, { name: 'Vehicles', route: './vehicles' }];
  constructor() { }

  ngOnInit() {
   const date = new FormControl(new Date());
   const serializedDate = new FormControl((new Date()).toISOString());
  }

}
