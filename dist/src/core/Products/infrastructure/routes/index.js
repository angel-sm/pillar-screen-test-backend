"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const prisma_repository_1 = require("../database/prisma.repository");
const create_product_route_1 = require("./create-product.route");
const search_products_route_1 = require("./search-products.route");
const patch_product_route_1 = require("./patch-product.route");
const delete_product_route_1 = require("./delete-product.route");
class ProductRoutes {
    constructor(app) {
        this.app = app;
        this.PRODUCTS = '/products';
        this.DELETE_PRODUCT = '/products/:id';
        this.PATCH_PRODUCT = '/products/product/:id';
        this.dbRepository = new prisma_repository_1.PrismaRepository();
    }
    run() {
        new create_product_route_1.CreateProductRoute(this.app, this.dbRepository).route(this.PRODUCTS);
        new search_products_route_1.SearchProductsRoute(this.app, this.dbRepository).route(this.PRODUCTS);
        new patch_product_route_1.PatchProductRoute(this.app, this.dbRepository).route(this.PATCH_PRODUCT);
        new delete_product_route_1.DeleteProductRoute(this.app, this.dbRepository).route(this.DELETE_PRODUCT);
    }
}
exports.ProductRoutes = ProductRoutes;
