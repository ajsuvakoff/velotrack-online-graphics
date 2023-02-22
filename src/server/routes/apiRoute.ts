import {Request, Response, Router} from 'express';
import {csvToJson} from "../api/csvToJson";
import {dataForDiffOfTwo, dataForFinalProtocol, dataForTitle, diffOfTwoSetting, showTitle} from "../api/dataForTitles";
import {startListGetData} from "../api/getDataForStartList"
import {finalProtocolGetData} from "../api/getDataForFinalProtocol";
import {getTwoRacers} from "../api/getDataForDiffOfTwo";

export let apiRouter: Router = Router();

// todo: each router in separate module/file

apiRouter.get('/', (req: Request, res: Response) => res.send('Welcome backend with express!'));

apiRouter.get('/getData', (req: Request, res: Response) => csvToJson().then(data => res.send(data)).catch((err) => res.send(err)))

apiRouter.get('/startList', (req: Request, res: Response) => startListGetData().then(data => res.send(data)).catch((err) => res.send(err)))
apiRouter.get('/finalProtocol', (req: Request, res: Response) => finalProtocolGetData().then(data => res.send(data)).catch((err) => res.send(err)))

apiRouter.post('/getTwoRacers', (req: Request, res: Response) => {

    const raceId = req.body.raceId
    const id1 = req.body.id1
    const id2 = req.body.id2

    getTwoRacers(raceId, id1, id2).then(data => res.send(data)).catch((err) => res.send(err))

})

apiRouter.get('/setTimer', (req: Request, res: Response) => {

    const timerState = req.query.timerState

    dataForDiffOfTwo.timer = +timerState

    res.send('OK')
})



apiRouter.post('/showTitle', (req: Request, res: Response) => {

    const title = req.body.title
    showTitle(title)
    res.send('Ok')
})

apiRouter.post('/selectPage', (req: Request, res: Response) => {

    const title = req.body.title
    const pageId = req.body.pageId

    if (title === 1) {
        dataForTitle.page = Number(pageId)
    }
    if (title === 2) {
        dataForFinalProtocol.page = Number(pageId)
    }

    res.send('Ok')
})


apiRouter.post('/diffOfTwoSet', (req: Request, res: Response) => {

    const raceId = req.body.raceId
    const racer1Id = req.body.racer1Id
    const racer2Id = req.body.racer2Id

    if (raceId) {
        diffOfTwoSetting.raceId = raceId
    }
    if (racer1Id) {
        diffOfTwoSetting.racer1Id = racer1Id
    }
    if (racer2Id) {
        diffOfTwoSetting.racer2Id = racer2Id
    }

    res.send('Ok')
})

