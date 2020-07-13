import { createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  router: fromRouter.RouterReducerState;
}

export const selectRouter = createFeatureSelector<State, fromRouter.RouterReducerState>('router');

export const { selectRouteParams } = fromRouter.getSelectors(selectRouter);
