import {Request, Response, Router} from 'express';
import {getFiles, submitFile} from '../api/sendVideo';
import {getAlbums} from '../api/getAlbums';
import {createAlbum} from '../api/createAlbum';
import {getPath} from '../api/getPath';
import {getNameFromId} from '../api/getNameFromId';
import {getVideos} from '../api/getVideos';
import {changeDesc} from '../api/changeDesc';
import {ReqParams} from '../middleware/getReqParamsMiddleware';
import {AppConfig} from '../appConfig/appConfig';
import {cancelAllUploads, cancelUpload} from '../api/cancelUpload';
import {deleteAlbum} from "../api/deleteAlbum";

export let apiRouter: Router = Router();

// todo: each router in separate module/file

apiRouter.get('/', (req: Request, res: Response) => res.send('Welcome backend with express!'));

apiRouter.get('/getBasePath', (req: Request, res: Response) => res.send(AppConfig.app.basePath));

// todo: req/res types
apiRouter.get('/upload', async (req, res) => {
    const context = res.locals.params as ReqParams;
    const {groupId, albumId, folder} = context;

    if (groupId && albumId && folder) {
        getFiles(folder)
            .then((filesArray: any) => {
                submitFile(groupId, albumId, filesArray);
                res.send(200);
            })
            .catch(err => {
                if (err == -2) {
                    res.status(404).send('Такой папки не существует');
                } else {
                    res.send(err);
                }
            });
    } else {
        res.status(404).send();
    }
});

// todo: req/res types
apiRouter.get('/getFiles', async (req, res) => {

    // todo: get query from context and check params
    const folder: any = req.query.folder;

    getFiles(folder)
        .then(filesArray => res.send(filesArray))
        .catch(err => {
            if (err == -2) {
                res.status(404).send('Такой папки не существует');
            } else {
                res.send(err);
            }
        });
});

// todo: req/res types
apiRouter.get('/getAlbums', async (req, res) => {

    // todo: get query from context and check params
    const groupId: any = req.query.groupId;

    getAlbums(groupId)
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

// todo: req/res types
apiRouter.get('/createAlbum', async (req, res) => {

    // todo: get query from context and check params
    const groupId: any = req.query.groupId;
    const albumTitle: any = req.query.albumTitle;

    createAlbum(groupId, albumTitle)
        .then(response => res.send(response))
        .catch(err => res.status(404).send(err));
});


apiRouter.get('/getPath', async (req, res) => {
    const {yearPath, seasonPath, conferencePath} = res.locals.params as ReqParams;

    if (yearPath && seasonPath && conferencePath) {
        getPath(yearPath, seasonPath, conferencePath).then(resolve => res.send(resolve)).catch(err => res.status(404).send(err));
    } else {
        res.status(404).send();
    }
});

apiRouter.get('/getNameFromId', async (req, res) => {
    // todo: get query from context and check params

    const id: any = req.query.id;

    getNameFromId(id).then(resolve => res.send(resolve)).catch(err => res.status(404).send(err));

});

apiRouter.get('/getVideos', async (req, res) => {
    // todo: get query from context and check params

    const groupId: any = req.query.groupId;
    const albumId: any = req.query.albumId;

    getVideos(groupId, albumId).then(resolve => res.send(resolve)).catch(err => res.status(404).send(err));

});

apiRouter.post('/changeDesc', async (req, res) => {
    // todo: get query from context and check params
    // todo: error handling

    const groupId: any = req.body.groupId;
    const albumId: any = req.body.albumId;
    const desc: any = req.body.desc;

    changeDesc(groupId, albumId, desc).then(resolve => res.send(resolve)).catch(err => res.status(404).send(err));
});

apiRouter.post('/setDescForUpload', async (req, res) => {

    // todo: get query from context and check params
    let description: string = req.body.description;

    if (description) {
        AppConfig.vk.description = description;
        res.status(200).send(AppConfig.vk.description);
    } else {
        res.status(404).send
    }

});

apiRouter.post('/cancelUpload', async (req, res) => {

    // todo: get query from context and check params
    let id: string = req.body.id;

    cancelUpload(Number(id))
    res.sendStatus(200);

});

apiRouter.post('/cancelAllUploads', async (req, res) => {

    // todo: get query from context and check params
    cancelAllUploads().then((resolve) => res.send(resolve)).catch((err) => res.status(404).send(err))


});

apiRouter.post('/deleteAlbum', async (req, res) => {
    // todo: get query from context and check params
    // todo: error handling

    const groupId: number = req.body.groupId;
    const albumId: number = req.body.albumId;

    console.log(groupId, albumId)

    deleteAlbum(groupId, albumId).then(resolve => res.send(resolve)).catch(err => res.status(404).send(err));
});