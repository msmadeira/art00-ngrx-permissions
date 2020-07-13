import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import * as userActions from './user.actions';
import { LoginService } from '../services/login.service';

@Injectable()
export class UserEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      mergeMap(() => this.loginService.logUserIn()),
      map(user => userActions.loginSuccess({ user })),
    ),
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loginSuccess),
      map(() => this.router.navigateByUrl('dashboard')),
    ),
    { dispatch: false },
  );

  constructor(private actions$: Actions,
              private loginService: LoginService,
              private router: Router) {
  }
}
