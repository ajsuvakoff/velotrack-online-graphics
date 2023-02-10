import fs from 'fs';

type logType = 'error' | 'info' | 'upload-info'

interface uploadLog {
    eventName: string,
    file: string,
    path: string,
    time: Date
}

interface errorLog {
    file: string,
    path: string,
    error: string
}

export function logger(logType: logType, logData: string | uploadLog | errorLog) {
    if (logType === 'upload-info') {
        fs.appendFileSync('./logs/log.json', JSON.stringify(logData));
    } else if (logType === 'error') {
        fs.appendFileSync('./logs/error.json', JSON.stringify(logData));

        // webSocketServer.broadcast({
        //     'type': 'error',
        //     'file': logData.file,
        //     'path': logData.path,
        //     'error': logData.error,
        //     'data': logData.error
        // });

    } else {
        console.log(logData);
    }
}
