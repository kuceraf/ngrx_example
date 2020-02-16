
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "../../app-state";

@Component({
  selector: 'app-redux-counter',
  templateUrl: './redux-counter.component.html'
})
export class ReduxCounterComponent implements OnInit {
  counter$: Observable<number>;
  constructor(
    private store: Store<AppState>
  ) {
    this.counter$ = store.select('counter');
  }

  ngOnInit(): void {
  }

}
