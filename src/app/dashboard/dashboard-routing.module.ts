import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGuard } from './dashboard.guard';
import { RootDashboardComponent } from './components/root-dashboard/root-dashboard.component';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostEditComponent } from './containers/post-edit/post-edit.component';
import { FeatureGuard } from '../permission/guards/feature.guard';
import { Features } from '../permission/models/features.enum';
import { Permission } from '../permission/models/permissions.enum';

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
        canActivate: [FeatureGuard],
        data: { feature: Features.Posts, permission: Permission.Admin },
        component: PostEditComponent,
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
