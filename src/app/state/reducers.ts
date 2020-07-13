import { ActionReducerMap } from '@ngrx/store';

import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { userReducer, UserState } from "./user.reducer";
import { dashboardReducer, DashboardState } from '../dashboard/state/dashboard.reducer';

export interface State {
  user: UserState;
  dashboard: DashboardState;
  router: RouterReducerState,
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  dashboard: dashboardReducer,
  router: routerReducer,
};
