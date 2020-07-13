import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as dashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {

  editPost$ = createEffect(() =>
      this.actions$.pipe(
        ofType(dashboardActions.editPost),
        map(() => this.router.navigateByUrl('dashboard/posts')),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions,
              private router: Router) {
  }
}
