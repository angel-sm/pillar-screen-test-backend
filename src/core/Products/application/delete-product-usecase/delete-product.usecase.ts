import { ProductRepository } from "../../domain/product.repository";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(id: string): Promise<void> {
    await this.productRepository.deleteOne(id);
  }
}
