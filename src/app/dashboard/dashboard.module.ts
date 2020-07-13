import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DashboardGuard } from './dashboard.guard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { RootDashboardComponent } from './components/root-dashboard/root-dashboard.component';
import { PostDetailsComponent } from './containers/post-details/post-details.component';
import { PostListComponent } from './containers/post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DashboardRoutingModule,
  ],
  declarations: [
    RootDashboardComponent,
    PostItemComponent,
    PostDetailsComponent,
    PostListComponent,
  ],
  providers: [
    DashboardGuard,
  ]
})
export class DashboardModule {
}
