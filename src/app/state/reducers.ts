import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from "./user.reducer";

export interface State {
  user: UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
};
