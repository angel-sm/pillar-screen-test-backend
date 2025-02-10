import { PrismaFactory } from '../../../../infrastructure/database/prisma.factory';
import { PrimitiveProduct, Product } from '../../domain/product.entity';
import { ProductRepository } from '../../domain/product.repository';
import { PrismaClient } from '@prisma/client';

export class PrismaRepository extends ProductRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    super();
    this.prisma = PrismaFactory.client;
  }

  async search(
    page: number,
    limit: number,
  ): Promise<{
    products: Product[];
    total: number;
  }> {
    try {
      const currentPage = page > 0 ? page - 1 : 0;
      const skip = currentPage * limit;
      const products = await this.prisma.products.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      });

      const total = await this.prisma.products.count();

      return {
        products: products.map((product) => new Product(product)),
        total,
      };
    } catch (error) {
      console.log('🚀 ~ PrismaRepository ~ error:', error);
      throw new Error('Error searching products');
    }
  }

  async createOne(product: Product): Promise<void> {
    try {
      await this.prisma.products.create({
        data: product.toPrimitive,
      });
    } catch (error) {
      throw new Error('Error creating product');
    }
  }

  async patch(
    id: string,
    newAttrs: Partial<PrimitiveProduct>,
  ): Promise<Product> {
    try {
      const response = await this.prisma.products.update({
        where: { id },
        data: {
          ...newAttrs,
          updatedAt: new Date(),
        },
      });

      return Product.create({
        ...response,
      });

      console.log('🚀 ~ PrismaRepository ~ patch ~ response:', response);
    } catch (error) {
      throw new Error('Error updating product');
    }
  }

  async deleteOne(id: string): Promise<void> {
    try {
      const deletedProduct = await this.prisma.products.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error('Error deleting product');
    }
  }
}
