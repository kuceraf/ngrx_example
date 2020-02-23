import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {UsersService} from "../services/users.service";
import {LoadUserAction, UserActionTypes} from "./user.actions";
import {map, switchMap} from "rxjs/operators";

@Injectable()
export class UserEffects {
  @Effect() users$ = this.actions$.pipe(
    ofType(UserActionTypes.Fetch),
    switchMap(() => this.srv.getUsers().pipe(
      map(users => (new LoadUserAction(users)))
    ))
  );

  constructor(private actions$: Actions, private srv: UsersService) {
  }
}
