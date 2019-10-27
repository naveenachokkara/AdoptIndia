import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login, Signup } from '../auth.actions';
import { User } from 'src/app/model/user.model';
import { noop } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private authService: AuthService, private store: Store<AppState>, private formBuilder: FormBuilder) { }
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid Email' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Enter min length of 6 chars' }
    ],
    username: [
      { type: 'required', message: 'Username is required' }
    ]
  };
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      username: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

    this.authService.Login(this.registerForm.value.email, this.registerForm.value.password).
    subscribe(
      (result) => {
        console.log(result);
        this.store.dispatch(new Signup(result));
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
