import { Component, OnInit } from '@angular/core';
import { Data } from '../../../../assets/reportsdata';

@Component({
  selector: 'app-driver',
  templateUrl: './driverhistory.component.html',
  styleUrls: ['./driverhistory.component.css']
})
export class DriverHistoryComponent implements OnInit {
  isHistoric = true;
  driverHistory ;
  columns = [];
  constructor() { }

  ngOnInit() {
    this.columns = [
      { prop: 'regNumber', name: 'Reg Number' },
      { prop: 'vehicleType', name: 'Vehicle Type' },
      { prop: 'VehicleBrand', name: 'Vehicle Brand' },
      { prop: 'mfgDate', name: 'Mfg Date' },
      { prop: 'engineNumber', name: 'Engine Number' },
      { prop: 'insurance', name: 'Insurance' },
      { prop: 'VendorName', name: 'Vendor Name' },
      {prop : 'topSpeed', name : 'Top Speed'},
      {prop: 'location', name : 'Location'},
      { prop: 'documents', name: 'Documents' }
    ];
    this.driverHistory = Data ;
  }


}
