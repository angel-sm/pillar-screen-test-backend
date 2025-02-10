"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idProductSchema = exports.patchProductSchema = exports.createProductSchema = void 0;
const joi_validator_1 = require("../../../shared/joi.validator");
const joi_1 = __importDefault(require("joi"));
const fields = {
    id: joi_1.default.string().uuid().description('Unique identifier for the product'),
    name: joi_1.default.string().min(2).max(100).trim().description('Product name'),
    price: joi_1.default.number()
        .positive()
        .precision(2)
        .description('Product price in decimal format'),
    category: joi_1.default.string().trim().min(2).max(50).description('Product category'),
    quantity: joi_1.default.number()
        .integer()
        .min(0)
        .description('Available product quantity'),
    description: joi_1.default.string().trim().max(500).description('Product description'),
};
exports.createProductSchema = joi_validator_1.JoiValidator.toObjectSchema({
    name: fields.name.required(),
    price: fields.price.required(),
    category: fields.category.required(),
    quantity: fields.quantity.required(),
    description: fields.description.required(),
});
exports.patchProductSchema = joi_validator_1.JoiValidator.toObjectSchema({
    name: fields.name.optional(),
    price: fields.price.optional(),
    category: fields.category.optional(),
    quantity: fields.quantity.optional(),
    description: fields.description.optional(),
});
exports.idProductSchema = joi_validator_1.JoiValidator.toObjectSchema({
    id: fields.id.uuid().required(),
});
