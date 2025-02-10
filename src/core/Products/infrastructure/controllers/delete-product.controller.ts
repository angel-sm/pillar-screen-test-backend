import { Request, Response } from 'express';
import { JoiValidator } from '../../../../shared/joi.validator';
import { DeleteProductUseCase } from '../../application/delete-product-usecase/delete-product.usecase';
import { idProductSchema } from '../../domain/product.schemas';

export class DeleteProductController {
  constructor(private usecase: DeleteProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      JoiValidator.validateSchema(idProductSchema, request.params);
      await this.usecase.run(request.params?.id);
      return response
        .status(200)
        .json({ message: 'Product deleted success', data: null });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
