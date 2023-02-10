"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const csvToJson_1 = require("../api/csvToJson");
const dataForTitles_1 = require("../api/dataForTitles");
const getDataForStartList_1 = require("../api/getDataForStartList");
const getDataForFinalProtocol_1 = require("../api/getDataForFinalProtocol");
exports.apiRouter = (0, express_1.Router)();
// todo: each router in separate module/file
exports.apiRouter.get('/', (req, res) => res.send('Welcome backend with express!'));
exports.apiRouter.get('/getData', (req, res) => (0, csvToJson_1.csvToJson)().then(data => res.send(data)).catch((err) => res.send(err)));
exports.apiRouter.get('/startList', (req, res) => (0, getDataForStartList_1.startListGetData)().then(data => res.send(data)).catch((err) => res.send(err)));
exports.apiRouter.get('/finalProtocol', (req, res) => (0, getDataForFinalProtocol_1.finalProtocolGetData)().then(data => res.send(data)).catch((err) => res.send(err)));
exports.apiRouter.post('/showTitle', (req, res) => {
    const title = req.body.title;
    (0, dataForTitles_1.showTitle)(title);
    res.send('Ok');
});
exports.apiRouter.post('/selectPage', (req, res) => {
    const pageId = req.body.pageId;
    dataForTitles_1.dataForTitle.page = Number(pageId);
    res.send('Ok');
});
