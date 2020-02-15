import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, Observable} from "rxjs";
import {map} from "rxjs/operators";
@Component({
  selector: 'app-example',
  templateUrl: './observable-example.component.html'
})
export class ObservableExampleComponent implements OnInit {

  public intervalStream$: Observable<number>;
  public numberItem: number;
  public keyUpData;
  constructor() { }

  ngOnInit(): void {
    this.intervalStream$ = interval(1000);
    this.intervalStream$.subscribe(item => {
      console.log(item);
      this.numberItem = item
    });

    let textElement = document.getElementById('text');
    fromEvent(textElement, 'keyup')
      .pipe(
        map(e => e.target)
      )
      .subscribe(textElementData => console.log(textElementData))
  }

}
