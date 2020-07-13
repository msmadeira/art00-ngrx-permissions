import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import * as userSelectors from '../state/user.selectors';

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(protected store: Store,
              protected router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(userSelectors.selectUser),
      map((user: User) => {
        if (!!user) {
          return true;
        }
        return this.router.parseUrl('login');
      }),
    );
  }
}
