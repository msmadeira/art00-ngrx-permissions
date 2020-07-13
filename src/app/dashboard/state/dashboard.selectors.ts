import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DashboardState } from './dashboard.reducer';
import { selectPostId } from '../../state/router.selectors';

export const selectDashboardState = createFeatureSelector('dashboard');

export const selectPosts = createSelector(
  selectDashboardState,
  (dashboardState: DashboardState) => dashboardState.posts,
);

export const selectPost = createSelector(
  selectDashboardState,
  selectPostId,
  (dashboardState: DashboardState, postId: number) => dashboardState.posts.find(post => post.id === postId),
);
