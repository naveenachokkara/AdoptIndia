
import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
  SignupAction = '[Signup] Action',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: {user: User}) {
  }
}
export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export class Signup implements Action {
  readonly type = AuthActionTypes.SignupAction;
  constructor(public payload: {user: User}) {
  }
}


export type AuthActions = Login | Logout | Signup;
