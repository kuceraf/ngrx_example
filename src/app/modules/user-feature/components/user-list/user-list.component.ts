import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UserState} from "../../store/user-state";
import {Observable} from "rxjs";
import {getList} from "../../store/user.selector";
import {User} from "../../user";
import {CreateUserAction, DeleteUserAction} from "../../store/user.actions";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private id: number = 0;
  users$: Observable<User[]>;
  public newUser: string;
  constructor(
    private store: Store<UserState>
  ) { }

  ngOnInit(): void {
    this.users$ = this.store.select(getList)
  }

  public create() {
    this.store.dispatch(new CreateUserAction({id: this.id++, name: this.newUser}))
  }

  public delete(user: User) {
    this.store.dispatch(new DeleteUserAction(user.id));
  }
}
