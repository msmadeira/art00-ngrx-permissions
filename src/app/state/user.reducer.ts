import { Action, createReducer, on } from '@ngrx/store';

import * as userActions from './user.actions';
import { User } from '../models/user.model';

export interface UserState {
  entity: User;
  loggingIn: boolean;
}

export const userInitialState: UserState = {
  entity: undefined,
  loggingIn: false,
};

const reducer = createReducer(
  userInitialState,
  on(userActions.login, state => ({
    ...state,
    loggingIn: true,
  })),
  on(userActions.loginSuccess, (state, { user }) => ({
    ...state,
    entity: user,
    loggingIn: false,
  })),
  on(userActions.loginFailed, state => ({
    ...state,
    loggingIn: false,
  })),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
