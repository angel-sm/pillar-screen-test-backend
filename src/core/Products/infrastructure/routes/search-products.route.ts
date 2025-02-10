import { Express, Request, Response } from 'express';
import { ProductRepository } from '../../domain/product.repository';
import { SearchProductsUseCase } from '../../application/search-products-usecase/search-products.usecase';
import { SearcheProductsController } from '../controllers/search-products.controller';

export class SearchProductsRoute {
  constructor(
    readonly app: Express,
    private readonly repository: ProductRepository,
  ) {}

  async route(path: string) {
    const usecase = new SearchProductsUseCase(this.repository);
    const controller = new SearcheProductsController(usecase);

    this.app.get(path, async (req: Request, res: Response) => {
        await controller.handle(req, res);
    });
  }
}
