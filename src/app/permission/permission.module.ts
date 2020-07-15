import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionService } from './services/permission.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    PermissionService,
  ]
})
export class PermissionModule {
}
