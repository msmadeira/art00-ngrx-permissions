import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootDashboardComponent } from './containers/root-dashboard/root-dashboard.component';
import { DashboardGuard } from './dashboard.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [DashboardGuard],
    component: RootDashboardComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule {
}
