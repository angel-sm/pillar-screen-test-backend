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
exports.PatchProductRoute = void 0;
const patch_product_usecase_1 = require("../../application/patch-product-usecase/patch-product.usecase");
const patch_product_controller_1 = require("../controllers/patch-product.controller");
class PatchProductRoute {
    constructor(app, repository) {
        this.app = app;
        this.repository = repository;
    }
    route(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const usecase = new patch_product_usecase_1.PatchProductUseCase(this.repository);
            const controller = new patch_product_controller_1.PatchProductController(usecase);
            this.app.patch(path, (req, res) => __awaiter(this, void 0, void 0, function* () {
                yield controller.handle(req, res);
            }));
        });
    }
}
exports.PatchProductRoute = PatchProductRoute;
