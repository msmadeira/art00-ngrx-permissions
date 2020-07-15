import { Injectable, OnDestroy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../models/user.model';
import { Features } from '../../models/features.enum';
import { Permission } from '../../models/permissions.enum';
import * as userSelectors from '../../state/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class PermissionService implements OnDestroy {

  user: User;

  private onDestroy$ = new Subject<boolean>();

  constructor(private store: Store) {
    store
      .pipe(
        select(userSelectors.selectUser),
        takeUntil(this.onDestroy$),
      )
      .subscribe(user => this.user);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

  checkPermission(feature: Features, permission: Permission): boolean {
    const featurePermission = this.user.featurePermissions.find(f => f.feature = feature);

    if (!!featurePermission) {
      switch (permission) {
        case Permission.View:
          return featurePermission.permission !== Permission.None;
        case Permission.Admin:
          return featurePermission.permission === Permission.Admin;
      }
    }
    return false;
  }
}
