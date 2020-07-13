import { Action, createReducer, on } from '@ngrx/store';

import { Post } from '../models/post.model';
import * as dashboardActions from './dashboard.actions';

export interface DashboardState {
  posts: Post[];
}

export const dashboardInitialState: DashboardState = {
  posts: [],
};

const reducer = createReducer(
  dashboardInitialState,
  on(dashboardActions.editPost, (state, { post }) => ({
    ...state,
    posts: state.posts.map(p => p.id === post.id ? post : p),
  })),
);

export function dashboardReducer(state: DashboardState | undefined, action: Action) {
  return reducer(state, action);
}
