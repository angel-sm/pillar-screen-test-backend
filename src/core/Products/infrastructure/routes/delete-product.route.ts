import { Express, Request, Response } from 'express';
import { ProductRepository } from '../../domain/product.repository';
import { DeleteProductUseCase } from '../../application/delete-product-usecase/delete-product.usecase';
import { DeleteProductController } from '../controllers/delete-product.controller';

export class DeleteProductRoute {
  constructor(
    readonly app: Express,
    private readonly repository: ProductRepository,
  ) {}

  async route(path: string) {
    const usecase = new DeleteProductUseCase(this.repository);
    const controller = new DeleteProductController(usecase);

    this.app.delete(path, async (req: Request, res: Response) => {
      await controller.handle(req, res);
    });
  }
}
