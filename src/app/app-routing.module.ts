import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./modules/user-feature/components/user-list/user-list.component";
import { StoreRouterConnectingModule} from '@ngrx/router-store';
import {UserDetailComponent} from "./modules/user-feature/components/user-detail/user-detail.component";


const routes: Routes = [
  {path: 'ca/:caId',
    children: [
      { path: 'crisis-center', component: UserListComponent },
      { path: 'heroes', component: UserDetailComponent }]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
