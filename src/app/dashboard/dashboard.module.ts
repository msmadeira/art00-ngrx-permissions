import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { DashboardGuard } from './dashboard.guard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PermissionModule } from '../permission/permission.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { RootDashboardComponent } from './components/root-dashboard/root-dashboard.component';
import { PostDetailsModalComponent } from './components/post-details-modal/post-details-modal.component';
import { PostEditComponent } from './containers/post-edit/post-edit.component';
import { PostListComponent } from './containers/post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    DashboardRoutingModule,
    PermissionModule,
  ],
  declarations: [
    RootDashboardComponent,
    PostItemComponent,
    PostEditComponent,
    PostListComponent,
    PostDetailsModalComponent,
  ],
  providers: [
    DashboardGuard,
  ]
})
export class DashboardModule {
}
