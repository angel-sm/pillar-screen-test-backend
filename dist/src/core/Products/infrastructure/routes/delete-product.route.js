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
exports.DeleteProductRoute = void 0;
const delete_product_usecase_1 = require("../../application/delete-product-usecase/delete-product.usecase");
const delete_product_controller_1 = require("../controllers/delete-product.controller");
class DeleteProductRoute {
    constructor(app, repository) {
        this.app = app;
        this.repository = repository;
    }
    route(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const usecase = new delete_product_usecase_1.DeleteProductUseCase(this.repository);
            const controller = new delete_product_controller_1.DeleteProductController(usecase);
            this.app.delete(path, (req, res) => __awaiter(this, void 0, void 0, function* () {
                yield controller.handle(req, res);
            }));
        });
    }
}
exports.DeleteProductRoute = DeleteProductRoute;
