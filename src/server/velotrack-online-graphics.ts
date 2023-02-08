import {expressServer} from './server/expressServer';
import {createServer} from 'http';
import {serverOnError} from './server/serverOnError';
import {uploadingFiles} from './api/sendVideo';
import {Server} from 'ws';
import fs from 'fs';
import {AppConfig} from './appConfig/appConfig';

/** port */
const port = 80;

/** set express port */
expressServer.set('port', port);

/** assign express to server */
export const server = createServer(expressServer);

server.listen(port);

server.on('error', err => serverOnError(err, port));

server.on('listening', () => console.log(`app listening on port: ${port}`));

const logsDirectory = './logs';

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

/** create ws server */
export const webSocketServer: Server = new Server({server});
webSocketServer.on('connection', (ws: WebSocket) =>
    ws.send(JSON.stringify({
        type: 'activeJobs', data: uploadingFiles
    })));

/** create broadcast function */
export const broadcastWS = (msg: {}) => webSocketServer.clients.forEach(client => client.send(JSON.stringify(msg)));

process.on('beforeExit', (code: number) => console.log(`app stopped with code: ${code}`));
