import { Params } from '@angular/router';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DashboardState } from './dashboard.reducer';
import * as routerSelectors from '../../state/router.selectors';

export const selectDashboardState = createFeatureSelector('dashboard');

export const selectPosts = createSelector(
  selectDashboardState,
  (dashboardState: DashboardState) => dashboardState.posts,
);

export const selectPost = createSelector(
  selectDashboardState,
  routerSelectors.selectRouteParams,
  (dashboardState: DashboardState, params: Params) => dashboardState.posts.find(post => post.id === parseInt(params.id))
);
