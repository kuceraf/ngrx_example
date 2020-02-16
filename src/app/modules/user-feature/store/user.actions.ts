import {Action} from "@ngrx/store";
import {Product} from "../../../store/product";
import {ProductActionTypes} from "../../../store/product.actions";
import {User} from "../user";

export enum UserActionTypes {
  Create = '[User] Create',
  Get = '[User] Get',
  Delete = '[Delete] Delete'
}

export class CreateUserAction implements Action {
  type: UserActionTypes = UserActionTypes.Create;
  constructor(public payload: User) {
  }
}

export class GetUserAction implements Action {
  type: UserActionTypes = UserActionTypes.Get;
}

export class DeleteUserAction implements Action {
  type: UserActionTypes = UserActionTypes.Delete;
  constructor(public payload: number) {
  }
}
