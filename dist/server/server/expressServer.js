"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressServer = void 0;
const apiRoute_1 = require("../routes/apiRoute");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const staticFolderPath = path_1.default.join(__dirname, '../../client/');
exports.expressServer = (0, express_1.default)();
exports.expressServer.use((0, cors_1.default)());
exports.expressServer.use(express_1.default.json());
exports.expressServer.use(express_1.default.urlencoded({ extended: true }));
exports.expressServer.use(express_1.default.static(staticFolderPath));
exports.expressServer.use('/api', apiRoute_1.apiRouter);
