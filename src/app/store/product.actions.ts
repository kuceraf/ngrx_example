import {Action} from "@ngrx/store";
import {Product} from "./product";

// NOTE: every time dispatch is called, all reducers are called - thus action name must be unique
export enum ProductActionTypes {
  Create = '[Product] Create',
  Update = '[Product] Update',
  Delete = '[Product] Delete',
  Get = '[Product] Get'
}

export class CreateProductAction implements Action {
  type: ProductActionTypes = ProductActionTypes.Create;
  constructor(public payload: Product) {
  }
}

export class GetProductAction implements Action {
  type: ProductActionTypes = ProductActionTypes.Get;
}

export class DeleteProductAction implements Action {
  type: ProductActionTypes   = ProductActionTypes.Delete;
  constructor(public payload: number) {}
}

export type ProductActionUnion = CreateProductAction |
  DeleteProductAction |
  GetProductAction;
