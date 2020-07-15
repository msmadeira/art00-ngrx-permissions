import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../models/user.model';
import * as userSelectors from '../state/user.selectors';
import * as userActions from '../state/user.actions';

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(protected store: Store,
              protected cookieService: CookieService,
              protected router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(userSelectors.selectUser),
      map((user: User) => {
        if (!!user) {
          return true;
        } else if (this.cookieService.check('user')) {
          const user = JSON.parse(this.cookieService.get('user')) as User;

          this.store.dispatch(userActions.setUser({ user }));
          return true;
        }
        return this.router.parseUrl('login');
      }),
    );
  }
}
