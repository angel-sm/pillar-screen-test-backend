"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const product_entity_1 = require("../../domain/product.entity");
class CreateProductUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    run(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = product_entity_1.Product.create({
                name: dto.name,
                price: dto.price,
                category: dto.category,
                description: dto.description,
                quantity: dto.quantity,
            });
            yield this.repository.createOne(product);
            return product;
        });
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
