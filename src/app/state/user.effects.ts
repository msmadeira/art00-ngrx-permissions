import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';

import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      mergeMap(({ username, password }: { username: string; password: string }) =>
        this.loginService.logUserIn(username, password)
      ),
      catchError((err, caught$) => {
        this.snackBar.open('Invalid credentials', 'Ok', {
          duration: 2000,
        });
        this.store.dispatch(userActions.loginFailed());
        return caught$;
      }),
      map(user => userActions.loginSuccess({ user })),
    ),
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loginSuccess),
      map(({ user }: { user: User }) => {
        this.cookieService.set('user', JSON.stringify(user), null, '/');
        this.router.navigateByUrl('dashboard');
      }),
    ),
    { dispatch: false },
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.logout),
      map(() => {
        this.cookieService.delete('user', '/');
        this.router.navigateByUrl('login');
      }),
    ),
    { dispatch: false },
  );

  setUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.setUser),
      map(({ user }: { user: User }) => {
        this.cookieService.set('user', JSON.stringify(user), null, '/');
      }),
    ),
    { dispatch: false },
  );

  constructor(private actions$: Actions,
              private snackBar: MatSnackBar,
              private store: Store,
              private loginService: LoginService,
              private cookieService: CookieService,
              private router: Router) {
  }
}
