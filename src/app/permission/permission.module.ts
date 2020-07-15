import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionService } from './services/permission.service';
import { FeatureGuard } from './guards/feature.guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    FeatureGuard,
    PermissionService,
  ]
})
export class PermissionModule {
}
