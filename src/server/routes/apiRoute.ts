import {Request, Response, Router} from 'express';
import {csvToJson, downloadTable} from "../api/csvToJson";
import {dataForTitle, showTitle} from "../api/dataForTitles";
import {startListGetData} from "../api/getDataForStartList"
import {finalProtocolGetData} from "../api/getDataForFinalProtocol";

export let apiRouter: Router = Router();

// todo: each router in separate module/file

apiRouter.get('/', (req: Request, res: Response) => res.send('Welcome backend with express!'));

apiRouter.get('/getData', (req: Request, res: Response) => csvToJson().then(data => res.send(data)).catch((err) => res.send(err)))

apiRouter.get('/startList', (req: Request, res: Response) => startListGetData().then(data => res.send(data)).catch((err) => res.send(err)))
apiRouter.get('/finalProtocol', (req: Request, res: Response) => finalProtocolGetData().then(data => res.send(data)).catch((err) => res.send(err)))

apiRouter.post('/showTitle', (req: Request, res: Response) => {

    const title = req.body.title
    showTitle(title)
    res.send('Ok')
})

apiRouter.post('/selectPage', (req: Request, res: Response) => {

    const pageId = req.body.pageId

    dataForTitle.page = Number(pageId)
    res.send('Ok')
})
