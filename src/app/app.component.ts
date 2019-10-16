import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdoptIndia';
  constructor(public router: Router) { }
  // goToLogin() {
  //   this.router.navigateByUrl('login').then(info => {
  //     if (info) {
  //       console.log('Navigation is successful!');
  //     } else {
  //       console.log('Navigation has failed!');
  //     }
  //   }).catch(e => {
  //     console.log(e);
  //   });
  // }
}
