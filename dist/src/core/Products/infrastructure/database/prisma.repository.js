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
exports.PrismaRepository = void 0;
const prisma_factory_1 = require("../../../../infrastructure/database/prisma.factory");
const product_entity_1 = require("../../domain/product.entity");
const product_repository_1 = require("../../domain/product.repository");
class PrismaRepository extends product_repository_1.ProductRepository {
    constructor() {
        super();
        this.prisma = prisma_factory_1.PrismaFactory.client;
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.prisma.product.findMany();
                return products.map((product) => new product_entity_1.Product(product));
            }
            catch (error) {
                throw new Error('Error searching products');
            }
        });
    }
    createOne(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.product.create({
                    data: product.toPrimitive,
                });
            }
            catch (error) {
                throw new Error('Error creating product');
            }
        });
    }
    patch(id, newAttrs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.product.update({
                    where: { id },
                    data: newAttrs,
                });
            }
            catch (error) {
                throw new Error('Error updating product');
            }
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedProduct = yield this.prisma.product.delete({
                    where: { id },
                });
            }
            catch (error) {
                throw new Error('Error deleting product');
            }
        });
    }
}
exports.PrismaRepository = PrismaRepository;
