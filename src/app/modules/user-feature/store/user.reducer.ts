import {UserActionTypes} from "./user.actions";
import {UserState} from "./user-state";
import {UserFeature} from "../user-feature";

const initialState: UserFeature = {
  loading: false,
  users: [],
  error: void 0
};

export const userReducer = (state: UserFeature = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.Fetch: // NOTE action that is dispatched when we start fetching data from server
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.Load: // NOTE action that is dispatched when we have data from server
      return {
        ...state,
        loading: false,
        users: [...action.payload]
      };
    default:
      return state;
  }
};

