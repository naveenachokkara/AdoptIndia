import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigateByUrl('register');
  }
  goToLogin() {
    this.router.navigateByUrl('login').then(info => {
      if (info) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    }).catch(e => {
      console.log(e);
    });
  }


}
