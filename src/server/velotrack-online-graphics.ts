import {expressServer} from './server/expressServer';
import {createServer} from 'http';
import {serverOnError} from './server/serverOnError';
import {Server} from 'ws';
import {csvToJson} from "./api/csvToJson";
import {allTitles} from "./api/dataForTitles";
import {getAllData} from "./api/getAllData";

/** port */
const port = 80;

/** set express port */
expressServer.set('port', port);

/** assign express to server */
export const server = createServer(expressServer);

server.listen(port);
server.on('error', err => serverOnError(err, port));
server.on('listening', () => console.log(`app listening on port: ${port}`));

csvToJson().then()

/** create ws server */
export const webSocketServer: Server = new Server({server});
webSocketServer.on('connection', (ws: WebSocket) =>
    ws.send(JSON.stringify(allTitles)))

/** create broadcast function */
export const broadcastWS = (msg: {}) => webSocketServer.clients.forEach(client => client.send(JSON.stringify(msg)));

process.on('beforeExit', (code: number) => console.log(`app stopped with code: ${code}`));

setInterval(() => {
    csvToJson().then(() => {
        getAllData().then(() => broadcastWS(allTitles))
    }).catch(err => {
    })
}, 300)