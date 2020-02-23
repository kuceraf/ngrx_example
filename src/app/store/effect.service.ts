import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {tap} from "rxjs/operators";

@Injectable()
export class EffectService {
  @Effect({dispatch: false})
  increment$ = this.actions$.pipe(
    ofType("INCREMENT"),
    tap(() => {
      console.log("Calling BE to save data")
    })
  );

  constructor(private actions$: Actions) {}
}
