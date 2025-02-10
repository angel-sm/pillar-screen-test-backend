import { Request, Response } from 'express';
import { SearchProductsUseCase } from '../../application/search-products-usecase/search-products.usecase';
import { JoiValidator } from '../../../../shared/joi.validator';
import { searchProductsQueryParams } from '../../domain/product.schemas';

export class SearcheProductsController {
  constructor(private usecase: SearchProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      JoiValidator.validateSchema(searchProductsQueryParams, request.query);

      const page = parseInt(request.query?.page as string);
      const limit = parseInt(request.query?.limit as string);

      const { products, total } = await this.usecase.run({
        page,
        limit,
      });
      return response.status(200).json({
        message: 'Products retrieved success',
        data: products,
        pagination: {
          page,
          limit,
          total,
        },
      });
    } catch (error: any) {
      console.log("🚀 ~ SearcheProductsController ~ handle ~ error:", error)
      return response.status(400).json({ error: error.message });
    }
  }
}
