import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

import { Permission } from '../models/permissions.enum';
import { Features } from '../models/features.enum';
import { PermissionService } from '../services/permission.service';

@Directive({
  selector: '[appCheckPermissions]'
})
export class CheckPermissionsDirective implements OnInit {

  @Input() feature: Features;
  @Input() permission: Permission;

  constructor(private permissionService: PermissionService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    if (this.permissionService.checkPermission(this.feature, this.permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
