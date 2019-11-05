import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActionTypes, AuthActions } from './auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  loggedIn: boolean;
  userprofile: User;
  isSignup: boolean;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  userprofile: undefined,
  isSignup: false
};

export function authreducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        ...state,
        loggedIn: true,
        isSignup: true,
        userprofile: action.payload.user
      };
    case AuthActionTypes.LogoutAction:
      return {
        ...state,
        loggedIn: false,
        isSignup: true,
        userprofile: undefined
      };
    case AuthActionTypes.SignupAction:
      return {
        ...state,
        isSignup: true,
        userprofile: action.payload.user
      };
    default:
      return state;
  }
}
