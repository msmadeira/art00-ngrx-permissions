import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model';
import { PermissionService } from '../services/permission.service';
import * as userSelectors from '../../state/user.selectors';

@Injectable()
export class FeatureGuard implements CanActivate {

  constructor(protected store: Store,
              protected router: Router,
              protected permissionService: PermissionService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(userSelectors.selectUser),
      map((user: User) => {
        if (!!user && !!this.permissionService.checkPermission(route.data.feature, route.data.permission)) {
          return true;
        }
        return this.router.parseUrl('dashboard');
      }),
    );
  }
}
