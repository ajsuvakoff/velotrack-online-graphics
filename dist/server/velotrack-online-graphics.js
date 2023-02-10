"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastWS = exports.webSocketServer = exports.server = void 0;
const expressServer_1 = require("./server/expressServer");
const http_1 = require("http");
const serverOnError_1 = require("./server/serverOnError");
const ws_1 = require("ws");
const fs_1 = __importDefault(require("fs"));
const csvToJson_1 = require("./api/csvToJson");
const dataForTitles_1 = require("./api/dataForTitles");
/** port */
const port = 80;
/** set express port */
expressServer_1.expressServer.set('port', port);
/** assign express to server */
exports.server = (0, http_1.createServer)(expressServer_1.expressServer);
exports.server.listen(port);
exports.server.on('error', err => (0, serverOnError_1.serverOnError)(err, port));
exports.server.on('listening', () => console.log(`app listening on port: ${port}`));
const logsDirectory = './logs';
if (!fs_1.default.existsSync(logsDirectory)) {
    fs_1.default.mkdirSync(logsDirectory);
}
(0, csvToJson_1.csvToJson)().then();
/** create ws server */
exports.webSocketServer = new ws_1.Server({ server: exports.server });
exports.webSocketServer.on('connection', (ws) => ws.send(JSON.stringify(dataForTitles_1.allTitles)));
/** create broadcast function */
const broadcastWS = (msg) => exports.webSocketServer.clients.forEach(client => client.send(JSON.stringify(msg)));
exports.broadcastWS = broadcastWS;
process.on('beforeExit', (code) => console.log(`app stopped with code: ${code}`));
// setInterval(() => {
//     csvToJson().then(() => {
//         startListGetData().then(() => broadcastWS(allTitles))
//     }).catch(err => console.log(err))
// }, 500)
