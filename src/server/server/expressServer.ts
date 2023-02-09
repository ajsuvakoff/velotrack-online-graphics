import {apiRouter} from '../routes/apiRoute';
import express from 'express';
import cors from 'cors';
import path from 'path';

const staticFolderPath: string = path.join(__dirname, '../../client/');

export const expressServer: express.Application = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(express.urlencoded({extended: true}));
expressServer.use(express.static(staticFolderPath));
expressServer.use('/api', apiRouter);