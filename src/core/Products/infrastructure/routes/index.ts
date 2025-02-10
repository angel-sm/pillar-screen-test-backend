import { Express } from 'express';
import { PrismaRepository } from '../database/prisma.repository';
import { CreateProductRoute } from './create-product.route';
import { SearchProductsRoute } from './search-products.route';
import { PatchProductRoute } from './patch-product.route';
import { DeleteProductRoute } from './delete-product.route';

export class ProductRoutes {
  private readonly dbRepository: PrismaRepository;

  private readonly CREATE_PRODUCTS = '/products';
  private readonly SERCH_PRODUCTS = '/products/search';
  private readonly DELETE_PRODUCT = '/products/:id';
  private readonly PATCH_PRODUCT = '/products/product/:id';

  constructor(readonly app: Express) {
    this.dbRepository = new PrismaRepository();
  }

  run() {
    new CreateProductRoute(this.app, this.dbRepository).route(
      this.CREATE_PRODUCTS,
    );
    new SearchProductsRoute(this.app, this.dbRepository).route(
      this.SERCH_PRODUCTS,
    );
    new PatchProductRoute(this.app, this.dbRepository).route(
      this.PATCH_PRODUCT,
    );
    new DeleteProductRoute(this.app, this.dbRepository).route(
      this.DELETE_PRODUCT,
    );
  }
}
