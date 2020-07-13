import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { DashboardGuard } from './dashboard.guard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { RootDashboardComponent } from './containers/root-dashboard/root-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    DashboardRoutingModule,
  ],
  declarations: [
    RootDashboardComponent,
    PostItemComponent,
  ],
  providers: [
    DashboardGuard,
  ]
})
export class DashboardModule {
}
