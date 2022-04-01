import { IProduct } from '../interfaces/models/IProduct';
import ProductModel from '../models/productModel';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  getAllProducts = async () => {
    const products = await this.productModel.getAllProducts();

    return { statusCode: 200, data: products };
  };

  createNewProduct = async (newProductData: IProduct) => {
    const products = await this.productModel.createNewProduct(newProductData);

    return { statusCode: 201, data: { id: products, ...newProductData } };
  };
}