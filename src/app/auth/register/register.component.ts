import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login } from '../auth.actions';
import { User } from 'src/app/model/user.model';
import { noop } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private authService : AuthService, private store: Store<AppState> , private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){

    console.log(this.registerForm);

    this.authService.Login(this.registerForm.value.email, this.registerForm.value.password).
      pipe(
        tap(
          user => {
            this.store.dispatch(new Login({ user }));
          }
        )
      ).
      subscribe(
        noop,
        () => {
          const user: User = {
            id: '123445rffd',
            email: 'jyothimamidi@gmail.com'
          };
          this.store.dispatch(new Login({ user }));
          //  alert('please enter valid username or password');
        }
      );

  }

}
