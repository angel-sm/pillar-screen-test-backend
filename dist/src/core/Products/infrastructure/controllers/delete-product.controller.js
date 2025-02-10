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
exports.DeleteProductController = void 0;
const joi_validator_1 = require("../../../../shared/joi.validator");
const product_schemas_1 = require("../../domain/product.schemas");
class DeleteProductController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                joi_validator_1.JoiValidator.validateSchema(product_schemas_1.idProductSchema, request.params);
                yield this.usecase.run((_a = request.params) === null || _a === void 0 ? void 0 : _a.id);
                return response
                    .status(200)
                    .json({ message: 'Product deleted success', data: null });
            }
            catch (error) {
                return response.status(400).json({ error: error.message });
            }
        });
    }
}
exports.DeleteProductController = DeleteProductController;
