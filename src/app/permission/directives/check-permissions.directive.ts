import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Permission } from '../models/permissions.enum';
import { Features } from '../models/features.enum';
import { PermissionService } from '../services/permission.service';
import * as userSelectors from '../../state/user.selectors';

@Directive({
  selector: '[appCheckPermissions]',
})
export class CheckPermissionsDirective implements OnInit, OnDestroy {

  @Input() appCheckPermissions: Permission;
  @Input() appCheckPermissionsFeature: Features;

  private onDestroy$ = new Subject<boolean>();

  constructor(private store: Store,
              private permissionService: PermissionService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.store
      .pipe(
        select(userSelectors.selectUser),
        takeUntil(this.onDestroy$),
      )
      .subscribe(user => {
        if (this.permissionService.checkPermission(user, this.appCheckPermissionsFeature, this.appCheckPermissions)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}
