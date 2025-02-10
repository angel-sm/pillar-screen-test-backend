import { PrimitiveProduct } from '../../domain/product.entity';
import { ProductRepository } from '../../domain/product.repository';
import { PatchProductDto } from './patch-product.dto';

export class PatchProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(
    productId: string,
    newAttrs: PatchProductDto,
  ): Promise<PrimitiveProduct> {
    const product = await this.productRepository.patch(
      productId as string,
      newAttrs,
    );
    return product.toPrimitive;
  }
}
