import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

export const selectRouterState = createFeatureSelector('router');

export const selectPostId = createSelector(
  selectRouterState,
  (routerState: RouterReducerState) => routerState.state.root.data['id'],
);
