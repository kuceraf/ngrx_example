import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/app-state";
import { selectUrl, selectSelectedCaId, selectRouteParams } from 'src/app/store/app.selector';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectUrl).subscribe((data) =>{
      console.log("********", data)
    })
    this.store.select(selectRouteParams).subscribe(data => {
      console.log("++++++", data);
    })
    this.store.select(selectSelectedCaId).subscribe((data) =>{
      console.log("######", data)
    })
  }

}
