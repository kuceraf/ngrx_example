import {Action} from "@ngrx/store";
import {User} from "../user";

export enum UserActionTypes {
  Fetch = '[User] Fetch',
  Load = '[User] Load',
  Create = '[User] Create',
  Get = '[User] Get',
  Delete = '[Delete] Delete'
}


export class FetchUserAction implements Action {
  type: UserActionTypes = UserActionTypes.Fetch;
}

export class LoadUserAction implements Action {
  type: UserActionTypes = UserActionTypes.Load;
  constructor(public payload: User[]) {
  }
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
