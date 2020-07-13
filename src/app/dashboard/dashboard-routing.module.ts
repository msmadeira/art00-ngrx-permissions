import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGuard } from './dashboard.guard';
import { RootDashboardComponent } from './components/root-dashboard/root-dashboard.component';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostDetailsComponent } from './containers/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [DashboardGuard],
    component: RootDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
      {
        path: 'posts',
        component: PostListComponent,
      },
      {
        path: 'posts/:id',
        component: PostDetailsComponent,
      },
    ]
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
