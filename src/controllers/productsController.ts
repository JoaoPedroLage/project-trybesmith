import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async getAllProducts(_req: Request, res: Response) {
    const { status, data } = await this.productService.getAllProducts();

    return res.status(status).json(data);
  }

  async createNewProduct(req: Request, res: Response) {
    const { status, data } = await this.productService.createNewProduct(req.body);
    const item = { item: data };

    return res.status(status).json(item);
  }
}