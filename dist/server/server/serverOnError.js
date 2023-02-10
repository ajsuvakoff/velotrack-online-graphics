"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverOnError = void 0;
function serverOnError(error, port) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = `Port ${port}`;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
exports.serverOnError = serverOnError;
