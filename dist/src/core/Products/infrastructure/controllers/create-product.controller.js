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
exports.CreateProductController = void 0;
const joi_validator_1 = require("../../../../shared/joi.validator");
const product_schemas_1 = require("../../domain/product.schemas");
class CreateProductController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                joi_validator_1.JoiValidator.validateSchema(product_schemas_1.createProductSchema, request.body);
                const product = yield this.usecase.run(request.body);
                return response
                    .status(201)
                    .json({ message: 'Product created', data: product });
            }
            catch (error) {
                return response.status(400).json({ error: error.message });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
