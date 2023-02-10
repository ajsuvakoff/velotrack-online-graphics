"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const fs_1 = __importDefault(require("fs"));
function logger(logType, logData) {
    if (logType === 'upload-info') {
        fs_1.default.appendFileSync('./logs/log.json', JSON.stringify(logData));
    }
    else if (logType === 'error') {
        fs_1.default.appendFileSync('./logs/error.json', JSON.stringify(logData));
        // webSocketServer.broadcast({
        //     'type': 'error',
        //     'file': logData.file,
        //     'path': logData.path,
        //     'error': logData.error,
        //     'data': logData.error
        // });
    }
    else {
        console.log(logData);
    }
}
exports.logger = logger;
