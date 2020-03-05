import {UserActionTypes} from "./user.actions";
import {UserState} from "./user-state";
import {UserFeature} from "../user-feature";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {User} from "../user";
import {createFeatureSelector} from "@ngrx/store";

const initialState: UserFeature = {
  loading: false,
  users: [],
  error: void 0
};

export interface State extends EntityState<User>{}
export const adapter: EntityAdapter<User> = createEntityAdapter();
export const initialStateA: State = adapter.getInitialState();
// NOTE - use adapter to replace repeating code like this: adapter.removeOne(action.payload, state);

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

// export const userSelector = createFeatureSelector('userFeature');
export const {
  selectAll,
  selectTotal
} = adapter.getSelectors();
