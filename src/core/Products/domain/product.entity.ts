import { v4 as uuid } from 'uuid';

export interface PrimitiveProduct {
  id: string;
  name: string;
  price: number;
  category: string[];
  quantity: number;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product {
  constructor(private attributes: PrimitiveProduct) {}

  static create(data: {
    id?: string;
    name: string;
    price: number;
    category: string[];
    quantity: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    const user = new Product({
      id: data.id ?? uuid(),
      name: data.name,
      price: data.price,
      category: data.category,
      quantity: data.quantity,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    });
    return user;
  }

  get toPrimitive() {
    return this.attributes;
  }
}
