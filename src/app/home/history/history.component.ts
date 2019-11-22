import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  tabs = [{ name: 'History', route: './' }, { name: 'Drivers', route: './drivers' }, { name: 'Vehicles', route: './vehicles' }];
  constructor() { }

  ngOnInit() {
  }

}
