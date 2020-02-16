import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableExampleComponent } from './examples/observable-example/observable-example.component';
import { SubjectExampleComponent } from './examples/subject-example/subject-example.component';
import {StoreModule} from "@ngrx/store";
import { ReduxCounterComponent } from './examples/redux-counter/redux-counter.component';
import { ReduxProductComponent } from './examples/redux-product/redux-product.component';
import {FormsModule} from "@angular/forms";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [ ...state, {...action.payload}];
    case 'REMOVE':
      return state.filter(p => p.id !== action.payload.id);
    case 'UPDATE':
      let product = state.find(p => p.id === action.payload.id);
      product = {...product, ...action.payload};
      let products = state.filter(p => p.id !== action.payload.id);
      return [
        product,
        ...products
      ];
      default:
      return state;
  }
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
    StoreModule.forRoot({
      counter: counterReducer,
      products: productReducer
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
