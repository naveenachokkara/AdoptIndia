import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login, Logout } from '../auth.actions';
import { User } from '../../model/user.model';
import { tap } from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
import { isloggedIn, isloggedOut } from '../auth.selectors';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthState } from '../auth.reducer';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formData: any;

  constructor(private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router,
    private formBuilder: FormBuilder) { }

  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid Email' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Enter min length of 6 chars' }
    ]
  };
  username = 'jyothimamidi@gmail.com';
  password = '123456';

  isloggedIn$: Observable<boolean>;
  isloggedOut$: Observable<boolean>;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      remember: new FormControl(false)
    });

    this.isloggedIn$ = this.store.
      select(isloggedIn);

    this.isloggedOut$ = this.store.select(isloggedOut);
  }

  onSubmit() {
    this.authService.Login(this.loginForm.value.email, this.loginForm.value.password).
      subscribe(
        (result) => {
          console.log(result);
          this.store.dispatch(new Login(result));
          // this.router.navigateByUrl('home');
        },
        (err) => {
          console.error(err);
        }
      );
  }
}
