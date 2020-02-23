import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user-state";

const getUsers = createFeatureSelector('userFeature');
export const getList =  createSelector(
  getUsers,
  (state: UserState) => state.userFeature.users
);

// select(state => state.users.list)
