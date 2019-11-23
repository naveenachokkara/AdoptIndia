import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from '../auth/auth.actions';
import { AuthState } from '../auth/auth.reducer';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show = true;
  sidenavWidth = 4;
  mainbodyWidth = 96;
  notifications = ['dummy noification 1', 'notification 2', 'notification 3'];
  count = this.notifications.length;

  constructor(private router: Router, private store: Store<AuthState>) { }

  ngOnInit() {
  }

  onNotiMenuClick() {
    this.count = 0;
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

  logout() {
    this.store.dispatch(new Logout());
  }

}
