"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const uuid_1 = require("uuid");
class Product {
    constructor(attributes) {
        this.attributes = attributes;
    }
    static create(data) {
        var _a;
        const user = new Product({
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)(),
            name: data.name,
            price: data.price,
            category: data.category,
            quantity: data.quantity,
            description: data.description,
        });
        return user;
    }
    get toPrimitive() {
        return this.attributes;
    }
}
exports.Product = Product;
