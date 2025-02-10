import { Express, Request, Response } from 'express';
import { ProductRepository } from '../../domain/product.repository';
import { PatchProductUseCase } from '../../application/patch-product-usecase/patch-product.usecase';
import { PatchProductController } from '../controllers/patch-product.controller';

export class PatchProductRoute {
  constructor(
    readonly app: Express,
    private readonly repository: ProductRepository,
  ) {}

  async route(path: string) {
    const usecase = new PatchProductUseCase(this.repository);
    const controller = new PatchProductController(usecase);

    this.app.patch(path, async (req: Request, res: Response) => {
        await controller.handle(req, res);
    });
  }
}
