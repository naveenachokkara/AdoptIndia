import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActionTypes, AuthActions } from './auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  loggedIn: boolean;
  userprofile: User;
}

export const initialAuthState: AuthState = {
loggedIn : true,
userprofile: undefined
};

export function authreducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction :
      return {
        ...state,
        loggedIn: true,
        userprofile: action.payload.user
      };
    case AuthActionTypes.LogoutAction :
      return{
        ...state,
        loggedIn: false,
        userprofile: undefined
      };
    default:
      return state;
  }
}
