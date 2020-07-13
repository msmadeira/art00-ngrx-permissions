import { ActionReducerMap } from '@ngrx/store';

import { userReducer, UserState } from "./user.reducer";
import { dashboardReducer, DashboardState } from '../dashboard/state/dashboard.reducer';

export interface State {
  user: UserState;
  dashboard: DashboardState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  dashboard: dashboardReducer,
};
