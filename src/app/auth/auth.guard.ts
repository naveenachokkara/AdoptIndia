import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { isloggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store : Store<AppState>, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(
      select(isloggedIn),
      tap(loggedIn => {
        if (!loggedIn) {
        this.router.navigateByUrl('./login');
        }
      })
    )
    return true;
  }
}
