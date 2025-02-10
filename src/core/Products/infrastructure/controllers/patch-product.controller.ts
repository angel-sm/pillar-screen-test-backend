import { Request, Response } from 'express';
import { JoiValidator } from '../../../../shared/joi.validator';
import {
  idProductSchema,
  patchProductSchema,
} from '../../domain/product.schemas';
import { PatchProductUseCase } from '../../application/patch-product-usecase/patch-product.usecase';

export class PatchProductController {
  constructor(private usecase: PatchProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      JoiValidator.validateSchema(idProductSchema, request.params);
      JoiValidator.validateSchema(patchProductSchema, request.body);
      const producUpdated = await this.usecase.run(
        request.params?.id,
        request.body,
      );
      return response
        .status(200)
        .json({ message: 'Product updated success', data: producUpdated });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
