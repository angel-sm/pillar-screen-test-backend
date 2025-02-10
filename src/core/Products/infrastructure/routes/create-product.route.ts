import { Express, Request, Response } from 'express';
import { ProductRepository } from '../../domain/product.repository';
import { CreateProductController } from '../controllers/create-product.controller';
import { CreateProductUseCase } from '../../application/create-product-usecase/create-product.usecase';

export class CreateProductRoute {
  constructor(
    readonly app: Express,
    private readonly repository: ProductRepository,
  ) {}

  async route(path: string) {
    const usecase = new CreateProductUseCase(this.repository);
    const controller = new CreateProductController(usecase);

    this.app.post(path, async (req: Request, res: Response) => {
        await controller.handle(req, res);
    });
  }
}
