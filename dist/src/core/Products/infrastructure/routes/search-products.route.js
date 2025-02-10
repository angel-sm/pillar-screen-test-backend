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
exports.SearchProductsRoute = void 0;
const search_products_usecase_1 = require("../../application/search-products-usecase/search-products.usecase");
const search_products_controller_1 = require("../controllers/search-products.controller");
class SearchProductsRoute {
    constructor(app, repository) {
        this.app = app;
        this.repository = repository;
    }
    route(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const usecase = new search_products_usecase_1.SearchProductsUseCase(this.repository);
            const controller = new search_products_controller_1.SearcheProductsController(usecase);
            this.app.get(path, (req, res) => __awaiter(this, void 0, void 0, function* () {
                yield controller.handle(req, res);
            }));
        });
    }
}
exports.SearchProductsRoute = SearchProductsRoute;
