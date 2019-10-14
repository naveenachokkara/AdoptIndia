import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store,select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login, Logout } from '../auth.actions';
import { User } from '../../model/user.model';
import {tap} from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
import { isloggedIn, isloggedOut } from '../auth.selectors';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService ,
              private store: Store<AppState>,
              private router: Router,
              private formbuilder: FormBuilder) { }
 username = 'jyothimamidi@gmail.com';
 password = '123456';

 isloggedIn$ : Observable<boolean>;
 isloggedOut$ : Observable<boolean>;
  ngOnInit() {
    this.isloggedIn$ = this.store.
      select(isloggedIn);

    this.isloggedOut$ = this.store.select(isloggedOut);
  }

  onLogin() {
    this.authService.Login(this.username, this.password).
    pipe(
      tap(
        user => {
          this.store.dispatch(new Login({user}));
        }
      )
    ).
    subscribe(
      noop,
      () => {
        const user: User =  {
          id: '123445rffd',
          email : 'jyothimamidi@gmail.com'
         };
        this.store.dispatch(new Login({user}));
      //  alert('please enter valid username or password');
      }
    );
  }

  onLogout() {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('login');
  }

}
