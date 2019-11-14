import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.scss']
})
export class ReportdetailsComponent implements OnInit {
  tabs = [{ name: 'Drivers', route: './drivers' }, { name: 'Vehicles', route: './vehicles' }];
  constructor(private readonly router: Router) {

  }

  ngOnInit() {
  }

}
