import { createSelector } from '@ngrx/store';

import { UserState } from './user.reducer';

export const selectUserState = (userState: UserState) => userState;

export const selectUser = createSelector(
  selectUserState,
  (userState: UserState) => userState.entity,
);

export const selectLoggingIn = createSelector(
  selectUserState,
  (userState: UserState) => userState.loggingIn,
);
