import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app-state";
import {Product} from "../../product";

@Component({
  selector: 'app-redux-product',
  templateUrl: './redux-product.component.html',
  styleUrls: ['./redux-product.component.scss']
})
export class ReduxProductComponent implements OnInit {

  id: number = 0;
  products$ = this.store.select('products');
  public newProduct: string;
  public selectedProduct: Product;
  constructor(private  store: Store<AppState>) { }

  ngOnInit(): void {
  }

  select(product: Product) {
    this.selectedProduct = {...product};
  }

  public save() {
    this.store.dispatch({
      type: 'ADD',
      payload: {
        id: this.id++,
        name: this.newProduct
      }
    })
  }

  public delete(product) {
    this.store.dispatch({
      type: 'REMOVE',
      payload: {
        id: product.id
      }
    })
  }

  public update() {
    this.store.dispatch({
      type: 'UPDATE',
      payload: this.selectedProduct
    });
    this.selectedProduct = null;
  }

}
