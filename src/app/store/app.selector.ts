import * as fromRouter from '@ngrx/router-store';
import {createFeatureSelector, createSelector, select} from "@ngrx/store";
import {UserState} from "../modules/user-feature/store/user-state";
import {AppState} from "./app-state";

const getRouter = createFeatureSelector('router');
let selector = createSelector(getRouter, (router: fromRouter.RouterReducerState<any>) => router);

// let getRouter = createSelector((state: AppState) => state.router);

export const {
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selector);

export const selectSelectedCaId = selectRouteParam('caId');
