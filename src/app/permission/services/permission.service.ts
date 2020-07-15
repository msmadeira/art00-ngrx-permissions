import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';
import { Features } from '../models/features.enum';
import { Permission } from '../models/permissions.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  checkPermission(user: User, feature: Features, permission: Permission): boolean {
    const featurePermission = user.featurePermissions.find(f => f.feature === feature);

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
