import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user-state";

const getUsers = createFeatureSelector('users');
export const getList =  createSelector(
  getUsers,
  (state: UserState) => state.users
);

// select(state => state.users.list)
