import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableExampleComponent } from './examples/observable-example/observable-example.component';
import { SubjectExampleComponent } from './examples/subject-example/subject-example.component';
import {ActionReducer, ActionReducerMap, StoreModule} from "@ngrx/store";
import { ReduxCounterComponent } from './examples/redux-counter/redux-counter.component';
import { ReduxProductComponent } from './examples/redux-product/redux-product.component';
import {FormsModule} from "@angular/forms";
import {ProductActionTypes, ProductActionUnion} from "./store/product.actions";
import {AppState} from "./store/app-state";
import {UserFeatureModule} from "./modules/user-feature/user-feature.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {EffectService} from "./store/effect.service";
import {HttpClientModule} from "@angular/common/http";
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {RouterModule} from "@angular/router";


const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// NOTE: ProductActionUnion adds type safety on action.payload
// const productReducer = (state = [], action: ProductActionUnion) => {
//   switch (action.type) {
//     case ProductActionTypes.Create:
//       return [ ...state, {...action.payload}];
//     case ProductActionTypes.Delete:
//       return state.filter(p => p.id !== action.payload);
//     // case ProductActionTypes.UPDATE:
//     //   let product = state.find(p => p.id === action.payload.id);
//     //   product = {...product, ...action.payload};
//     //   let products = state.filter(p => p.id !== action.payload.id);
//     //   return [
//     //     product,
//     //     ...products
//     //   ];
//       default:
//          return state;
//   }
// };


// NOTE ActionReducerMap is just for type safety - only attributes from AppState are allowed in map
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  counter: counterReducer
};

@NgModule({
  declarations: [
    AppComponent,
    ObservableExampleComponent,
    SubjectExampleComponent,
    ReduxCounterComponent,
    ReduxProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // NOTE: every time dispatch is called, all reducers are called - thus action name must be unique
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([EffectService]),
    FormsModule,
    RouterModule,
    UserFeatureModule,
    StoreDevtoolsModule.instrument({ maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
