"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./core/Products/infrastructure/routes");
// import cors from 'cors';
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        // this.app.use(cors());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    initializeRoutes() {
        new routes_1.ProductRoutes(this.app).run();
    }
    listRoutes() {
        const routes = this.app._router.stack
            .filter((layer) => layer.route)
            .map((layer) => ({
            method: Object.keys(layer.route.methods)[0].toUpperCase(),
            path: layer.route.path,
        }));
        console.table(routes);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
        this.listRoutes();
    }
}
exports.default = Server;
