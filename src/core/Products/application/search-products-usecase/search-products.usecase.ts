import { PrimitiveProduct } from '../../domain/product.entity';
import { ProductRepository } from '../../domain/product.repository';
import { SearchProductQueryParamsDto } from './search-products.dto';

export class SearchProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(queryParams: SearchProductQueryParamsDto): Promise<{
    products: PrimitiveProduct[];
    total: number;
  }> {
    const { products, total } = await this.productRepository.search(
      queryParams.page,
      queryParams.limit,
    );
    return {
      products: products.map((product) => product.toPrimitive),
      total,
    };
  }
}
