import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector('user');

export const selectUser = createSelector(
  selectUserState,
  (userState: UserState) => userState.entity,
);

export const selectLoggingIn = createSelector(
  selectUserState,
  (userState: UserState) => userState.loggingIn,
);
