"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidator = void 0;
const joi_1 = __importDefault(require("joi"));
class JoiValidator {
    static toObjectSchema(schema) {
        return joi_1.default.object(schema);
    }
    static validateSchema(schema, data) {
        const { error, value } = schema.validate(data);
        if (error) {
            throw new Error(error.details[0].message);
        }
        return value;
    }
}
exports.JoiValidator = JoiValidator;
