"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFactory = void 0;
const client_1 = require("@prisma/client");
class PrismaFactory {
    static get client() {
        if (!this.instance) {
            this.instance = new client_1.PrismaClient();
        }
        return this.instance;
    }
}
exports.PrismaFactory = PrismaFactory;
