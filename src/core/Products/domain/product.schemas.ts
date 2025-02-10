import { JoiValidator } from '../../../shared/joi.validator';
import { PrimitiveProduct } from './product.entity';
import Joi, { number } from 'joi';

const fields = {
  id: Joi.string().uuid().description('Unique identifier for the product'),
  name: Joi.string().min(2).max(100).trim().description('Product name'),
  price: Joi.number()
    .positive()
    .precision(2)
    .description('Product price in decimal format'),
  category: Joi.array(),
  quantity: Joi.number()
    .integer()
    .min(0)
    .description('Available product quantity'),
  description: Joi.string().trim().max(500).description('Product description'),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
} as const;

export const searchProductsQueryParams = JoiValidator.toObjectSchema({
  page: Joi.number().integer().min(0),
  limit: Joi.number().integer().max(10),
});

export const createProductSchema =
  JoiValidator.toObjectSchema<PrimitiveProduct>({
    name: fields.name.required(),
    price: fields.price.required(),
    category: fields.category.required(),
    quantity: fields.quantity.required(),
    description: fields.description.required(),
  });

export const patchProductSchema = JoiValidator.toObjectSchema({
  name: fields.name.optional(),
  price: fields.price.optional(),
  category: fields.category.optional(),
  quantity: fields.quantity.optional(),
  description: fields.description.optional(),
  createdAt: fields.createdAt.optional(),
  updatedAt: fields.updatedAt.optional()
});

export const idProductSchema = JoiValidator.toObjectSchema({
  id: fields.id.uuid().required(),
});
