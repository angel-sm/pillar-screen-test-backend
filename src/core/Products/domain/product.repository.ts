import { PrimitiveProduct, Product } from './product.entity';

export abstract class ProductRepository {
  abstract createOne(product: Product): Promise<void>;
  abstract search(
    page: number,
    limit: number,
  ): Promise<{
    products: Product[];
    total: number;
  }>;
  abstract patch(
    id: string,
    newAttrs: Partial<PrimitiveProduct>,
  ): Promise<Product>;
  abstract deleteOne(id: string): Promise<void>;
}
