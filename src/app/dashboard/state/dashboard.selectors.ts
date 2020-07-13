import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DashboardState } from './dashboard.reducer';

export const selectDashboardState = createFeatureSelector('dashboard');

export const selectPosts = createSelector(
  selectDashboardState,
  (dashboardState: DashboardState) => dashboardState.posts,
);
