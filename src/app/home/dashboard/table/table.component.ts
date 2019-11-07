import { Component, OnInit } from '@angular/core';
import { vehicleData } from '../../../../assets/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  rows = [];

  constructor() {
    const data = require('../../../../assets/vehicledata.json');
   }

  ngOnInit() {
    this.rows = vehicleData;
  }

}
