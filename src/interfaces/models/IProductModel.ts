import { IProduct } from './IProduct';

export interface ProductSelectResponse extends IProduct {
  id: number
}

export interface IProductModel {
  getAllProducts: () => Promise<ProductSelectResponse[]>;
}