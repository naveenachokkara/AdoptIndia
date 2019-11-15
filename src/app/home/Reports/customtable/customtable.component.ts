import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { Page } from '../vehicle/vehicle.model';
import { Data } from '../../../../assets/reportsdata';

@Component({
  selector: 'app-customtable',
  templateUrl: './customtable.component.html',
  styleUrls: ['./customtable.component.scss']
})

export class CustomtableComponent implements OnInit,AfterViewInit {

  constructor() {
    //this.setPage({offset: 0, pageSize: 10});
    this.rows= Data;
   }

  page = new Page();
    columns = [];
  rows = [];
  cache: any = {};
  private isLoading = false;
  @ViewChild('dataTable') table;
  @ViewChild('buttonTemplate') buttonsTemplate: TemplateRef<any>;


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
      { prop: 'actions', name: 'Actions', cellTemplate: this.buttonsTemplate }
    ];
  }
  ngAfterViewInit() {
    // this.table.bodyComponent.updatePage = function(direction: string): void {
    //   let offset = this.indexes.first / this.pageSize;

    //   if (direction === 'up') {
    //     offset = Math.ceil(offset);
    //   } else if (direction === 'down') {
    //     offset = Math.floor(offset);
    //   }

    //   if (direction !== undefined && !isNaN(offset)) {
    //     this.page.emit({ offset });
    //   }
    // }
  }


  // setPage(pageInfo) {
  //   this.isLoading = true;
  //   this.page.pageNumber = pageInfo.offset;
  //   this.page.size = pageInfo.pageSize;
  //   this.reportsService.getResults(this.page).subscribe(
  //     pagedData =>{
  //       this.page = pagedData.page;
  //       let rows = this.rows;
  //       if (rows.length !== pagedData.page.totalElements) {
  //         rows = Array.apply(null, Array(pagedData.page.totalElements));
  //         rows = rows.map((x, i) => this.rows[i]);
  //       }

  //       // calc start
  //       const start = this.page.pageNumber * this.page.size;

  //       // set rows to our new rows
  //       pagedData.data.map((x, i) => rows[i + start] = x);
  //       this.rows = rows;
  //       this.isLoading = false;
  //     });
  // }



}
