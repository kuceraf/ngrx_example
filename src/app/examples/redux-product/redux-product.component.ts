import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app-state";
import {Product} from "../../store/product";
import {Observable} from "rxjs";
import {CreateProductAction, DeleteProductAction} from "../../store/product.actions";

// action creator (alternativa k product.actions.ts)
const createProduct = (id, title) => ({type: 'ADD', payload: {id, title}});
// selector
const productSelector = (state) => state.products;


@Component({
  selector: 'app-redux-product',
  templateUrl: './redux-product.component.html',
  styleUrls: ['./redux-product.component.scss']
})
export class ReduxProductComponent implements OnInit {

  id: number = 0;
  products$: Observable<Product[]>;
  public newProduct: string;
  public selectedProduct: Product;
  constructor(private  store: Store<AppState>) {
    this.products$ = store.select(productSelector);
  }

  ngOnInit(): void {
  }

  select(product: Product) {
    this.selectedProduct = {...product};
  }

  public save() {
    this.store.dispatch(new CreateProductAction({id: this.id++, name: this.newProduct}))
  }

  public delete(product) {
    this.store.dispatch(new DeleteProductAction(product.id))
  }

  // public update() {
  //   this.store.dispatch({
  //     type: 'UPDATE',
  //     payload: this.selectedProduct
  //   });
  //   this.selectedProduct = null;
  // }
}
