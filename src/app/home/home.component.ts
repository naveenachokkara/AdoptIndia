import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show = true;
  sidenavWidth = 4;
  mainbodyWidth = 96;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 18;
   // this.mainbodyWidth = 82;
    console.log("increase sidenav width");
  }
  decrease() {
    this.sidenavWidth = 4;
 //   this.mainbodyWidth = 96;
    console.log("decrease sidenav width");
  }

}
