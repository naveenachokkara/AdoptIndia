import { createSelector } from '@ngrx/store';

export const selectedAuthState  = (state) => state.auth;

export const  isloggedIn = createSelector(
  selectedAuthState, // takes complete store state as input
  auth => auth.loggedIn  // return selected /slice of state as output
);


//combining selecctors

// export const isloggedOut = createSelector(
//   isloggedIn,
//   loggedIn => !loggedIn
// );

export const isloggedOut = createSelector(
  selectedAuthState,
  auth => !(auth.loggedIn)
);
