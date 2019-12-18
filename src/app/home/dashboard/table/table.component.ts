import { Component, OnInit } from '@angular/core';
import { vehicleData } from '../../../../assets/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  rows = [];
  columns = [];

  constructor() {
    this.rows = vehicleData;
  }

  ngOnInit() {
    this.columns = [
      { prop: 'name', name: 'Name' },
      { prop: 'gender', name: 'Gender' },
      { prop: 'company', name: 'Company' },
      { prop: 'age', name: 'Age' }
    ];
    this.rows = vehicleData;
  }

}
