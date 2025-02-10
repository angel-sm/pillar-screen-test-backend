import { PrimitiveProduct, Product } from '../../domain/product.entity';
import { ProductRepository } from '../../domain/product.repository';
import { createdProductDto } from './create-product.dto';

export class CreateProductUseCase {
  constructor(private readonly repository: ProductRepository) {}

  async run(dto: createdProductDto): Promise<PrimitiveProduct> {
    const product = Product.create({
      name: dto.name,
      price: dto.price,
      category: dto.category,
      description: dto.description,
      quantity: dto.quantity,
    });
    await this.repository.createOne(product);

    return product.toPrimitive;
  }
}
