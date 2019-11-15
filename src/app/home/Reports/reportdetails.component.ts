import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.scss']
})
export class ReportdetailsComponent implements OnInit {
  tabs = [{ name: 'Drivers', route: './' }, { name: 'Vehicles', route: './vehicles' }];
  constructor() {

  }

  ngOnInit() {

  }


}
