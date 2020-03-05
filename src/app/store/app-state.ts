import {Product} from "./product";
import {UserState} from "../modules/user-feature/store/user-state";
import * as fromRouter from '@ngrx/router-store';


export interface AppState {
  router: fromRouter.RouterReducerState<any>;
  counter: number
}
