import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardGuard } from './dashboard.guard';
import { RootDashboardComponent } from './containers/root-dashboard/root-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [
    RootDashboardComponent,
  ],
  providers: [
    DashboardGuard,
  ]
})
export class DashboardModule {
}
