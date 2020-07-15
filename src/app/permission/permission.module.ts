import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionService } from './services/permission.service';
import { FeatureGuard } from './guards/feature.guard';
import { CheckPermissionsDirective } from './directives/check-permissions.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CheckPermissionsDirective,
  ],
  exports: [
    CheckPermissionsDirective,
  ],
  providers: [
    FeatureGuard,
    PermissionService,
  ],
})
export class PermissionModule {
}
