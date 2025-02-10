import { Request, Response } from 'express';
import { JoiValidator } from '../../../../shared/joi.validator';
import { createProductSchema } from '../../domain/product.schemas';
import { CreateProductUseCase } from '../../application/create-product-usecase/create-product.usecase';

export class CreateProductController {
  constructor(private usecase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      JoiValidator.validateSchema(createProductSchema, request.body);
      const product = await this.usecase.run(request.body);
      return response
        .status(201)
        .json({ message: 'Product created', data: product });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
