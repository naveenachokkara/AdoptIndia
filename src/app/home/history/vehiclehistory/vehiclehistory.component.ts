import { Component, OnInit } from '@angular/core';

import { Data } from '../../../../assets/reportsdata';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehiclehistory.component.html',
  styleUrls: ['./vehiclehistory.component.css']
})
export class VehicleHistoryComponent implements OnInit {
  vehicleData = [];
  columns = [];

  constructor() {
    this.vehicleData = Data;
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

}
