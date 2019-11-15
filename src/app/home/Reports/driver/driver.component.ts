import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../../../assets/reportsdata';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
 driverData ;
 columns =[];

  constructor() {
    this.driverData = Data;
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
      {prop : 'topSpeed', name : 'Top Speed'},
      {prop:'location', name :'Location'},
      { prop: 'actions', name: 'Actions' }
    ];
  }

}
