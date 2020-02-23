import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {UsersService} from "../services/users.service";
import {LoadUserAction, UserActionTypes} from "./user.actions";
import {map, switchMap, tap} from "rxjs/operators";
import {Action} from "rxjs/internal/scheduler/Action";

@Injectable()
export class UserEffects {

  @Effect() saveUser$ = this.actions$.pipe(
    ofType(UserActionTypes.Save),
    // NOTE switchMap zahodi vsechny predchozi pokusy o ulozeni a necha jen posledni
    // vice na https://juristr.com/blog/2019/01/Guarantee-Event-Order-with-RxJS/
    switchMap((action) => this.srv.saveUser(action)),
    tap((arg) => console.log(arg)),
    map(() => {
      return {type:'your_action'}; // NOTE effect must return an action
    })
  );

  @Effect() users$ = this.actions$.pipe(
    ofType(UserActionTypes.Fetch),
    switchMap(() => this.srv.getUsers().pipe(
      map(users => (new LoadUserAction(users)))
    ))
  );

  constructor(private actions$: Actions, private srv: UsersService) {
  }
}
