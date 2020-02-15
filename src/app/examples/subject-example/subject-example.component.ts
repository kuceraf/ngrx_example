import { Component, OnInit } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html'
})
export class SubjectExampleComponent implements OnInit {

  public streamObservable$;
  public streamReplaySubject$;
  constructor() { }

  ngOnInit(): void {
    // observable
    this.streamObservable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    });

    // subject
    this.streamReplaySubject$ = new ReplaySubject(3);
    this.streamReplaySubject$.next(1);
    this.streamReplaySubject$.next(2);
    this.streamReplaySubject$.subscribe(item => {
      console.log(item)
    });
    this.streamReplaySubject$.next(3);
  }

}
