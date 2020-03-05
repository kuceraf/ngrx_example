import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import {FormsModule} from "@angular/forms";
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {UserState} from "./store/user-state";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/user.effects";
import {userReducer} from "./store/user.reducer";
import {UsersService} from "./services/users.service";
import { UserDetailComponent } from './components/user-detail/user-detail.component';


export const userReducers: ActionReducerMap<UserState> = {
  userFeature: userReducer
};

@NgModule({
  providers: [UsersService],
  declarations: [UserListComponent, UserDetailComponent],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('userFeature', userReducers),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserFeatureModule { }
