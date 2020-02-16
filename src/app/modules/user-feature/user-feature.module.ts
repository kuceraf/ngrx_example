import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import {FormsModule} from "@angular/forms";
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {AppState} from "../../store/app-state";
import {ProductActionTypes, ProductActionUnion} from "../../store/product.actions";
import {UserActionTypes} from "./store/user.actions";
import {UserState} from "./store/user-state";


const userReducer = (state = [], action) => {
  switch (action.type) {
    case UserActionTypes.Create:
      return [ ...state, {...action.payload}];
    case UserActionTypes.Delete:
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
};

export const userReducers: ActionReducerMap<UserState> = {
  users: userReducer,
};

@NgModule({
  declarations: [UserListComponent],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('users', userReducers)
  ]
})
export class UserFeatureModule { }
