import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, Logout, Signup } from './auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';



@Injectable()
export class AuthEffects {



  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(
      action => {
        localStorage.setItem('userData', JSON.stringify(action.payload.user));
        this.router.navigateByUrl('home');
      }
    )
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(
      () => {
        localStorage.removeItem('userData');
        this.router.navigateByUrl('register');
      }
    )
  );

  @Effect({ dispatch: false })
  signup$ = this.actions$.pipe(
    ofType<Signup>(AuthActionTypes.SignupAction),
    tap(
      () => {
        this.router.navigateByUrl('login');
      }
    )
  )

  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return this.store.dispatch(new Login(JSON.parse(userData)));
    } else {
      localStorage.removeItem('userData');
      this.router.navigateByUrl('register');
    }
  });


  constructor(private actions$: Actions, private router: Router, private store: Store<AppState>) { }

}
