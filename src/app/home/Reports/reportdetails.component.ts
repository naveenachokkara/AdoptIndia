import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.scss']
})
export class ReportdetailsComponent implements OnInit {
  tabs = [{ name: 'Drivers', route: './' }, { name: 'Vehicles', route: './vehicles' }];
  tabIndex = 0;
  activeLink: string;
  
  private readonly destroyed$ = new Subject<boolean>();

  constructor(private readonly router: Router) {

  }

  ngOnInit() {

  }
  onButtonClick(index) {
    this.tabIndex = index;
  }

}
