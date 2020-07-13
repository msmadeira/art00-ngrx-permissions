import { Action, createReducer, on } from '@ngrx/store';

import { Post } from '../models/post.model';
import * as dashboardActions from './dashboard.actions';

// basic post list mocking
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const mockedPosts: Post[] = [
  { id: 1, title: 'Dealing with permissions with Angular and NgRx', content: loremIpsum },
  { id: 2, title: 'How to setup a simple Angular app', content: loremIpsum },
  { id: 3, title: 'Creating a twitter bot', content: loremIpsum },
  { id: 4, title: 'Creating custom NgRx operators', content: loremIpsum },
  { id: 5, title: 'How to create a custom state serializer', content: loremIpsum },
  { id: 6, title: 'How to setup Angular i18n', content: loremIpsum },
  { id: 7, title: 'Best ways to have new ideas to blog posts', content: loremIpsum },
];

export interface DashboardState {
  posts: Post[];
}

export const dashboardInitialState: DashboardState = {
  posts: mockedPosts,
};

const reducer = createReducer(
  dashboardInitialState,
  on(dashboardActions.editPost, (state, { post }) => ({
    ...state,
    posts: state.posts.map(p => p.id === post.id ? post : p),
  })),
  on(dashboardActions.deletePost, (state, { postId }) => ({
    ...state,
    posts: state.posts.filter(p => p.id !== postId),
  })),
);

export function dashboardReducer(state: DashboardState | undefined, action: Action) {
  return reducer(state, action);
}
