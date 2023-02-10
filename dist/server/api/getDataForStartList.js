"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startListGetData = void 0;
const getDataFromCell_1 = require("../helpers/getDataFromCell");
const dataForTitles_1 = require("./dataForTitles");
function startListGetData() {
    return new Promise(function (resolve, reject) {
        (0, dataForTitles_1.readData)();
        dataForTitles_1.dataForTitle.memberList[1] = [];
        dataForTitles_1.dataForTitle.memberList[2] = [];
        dataForTitles_1.dataForTitle.memberList[3] = [];
        dataForTitles_1.dataForTitle.memberList[4] = [];
        if (dataForTitles_1.dataForTitle.memberList[1].length <= 0) {
            for (let i = 0; i < 10; i++) {
                dataForTitles_1.dataForTitle.memberList[1].push({ number: i + 1, id: '', name: '', team: '', zaezd: '', start: '' });
                dataForTitles_1.dataForTitle.memberList[2].push({ number: i + 11, id: '', name: '', team: '', zaezd: '', start: '' });
                dataForTitles_1.dataForTitle.memberList[3].push({ number: i + 21, id: '', name: '', team: '', zaezd: '', start: '' });
                dataForTitles_1.dataForTitle.memberList[4].push({ number: i + 31, id: '', name: '', team: '', zaezd: '', start: '' });
            }
        }
        for (let i = 0; i < 10; i++) {
            dataForTitles_1.dataForTitle.memberList[1][i].id = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 2, 19 + i);
            dataForTitles_1.dataForTitle.memberList[1][i].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 3, 19 + i);
            dataForTitles_1.dataForTitle.memberList[1][i].team = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 4, 19 + i);
            dataForTitles_1.dataForTitle.memberList[1][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 5, 19 + i);
            dataForTitles_1.dataForTitle.memberList[1][i].start = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 6, 19 + i);
            dataForTitles_1.dataForTitle.memberList[2][i].id = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 2, 29 + i);
            dataForTitles_1.dataForTitle.memberList[2][i].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 3, 29 + i);
            dataForTitles_1.dataForTitle.memberList[2][i].team = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 4, 29 + i);
            dataForTitles_1.dataForTitle.memberList[2][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 5, 29 + i);
            dataForTitles_1.dataForTitle.memberList[2][i].start = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 6, 29 + i);
            dataForTitles_1.dataForTitle.memberList[3][i].id = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 2, 39 + i);
            dataForTitles_1.dataForTitle.memberList[3][i].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 3, 39 + i);
            dataForTitles_1.dataForTitle.memberList[3][i].team = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 4, 39 + i);
            dataForTitles_1.dataForTitle.memberList[3][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 5, 39 + i);
            dataForTitles_1.dataForTitle.memberList[3][i].start = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 6, 39 + i);
            dataForTitles_1.dataForTitle.memberList[4][i].id = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 2, 49 + i);
            dataForTitles_1.dataForTitle.memberList[4][i].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 3, 49 + i);
            dataForTitles_1.dataForTitle.memberList[4][i].team = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 4, 49 + i);
            dataForTitles_1.dataForTitle.memberList[4][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 5, 49 + i);
            dataForTitles_1.dataForTitle.memberList[4][i].start = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 6, 49 + i);
        }
        for (let i = 0; i < 4; i++) {
            let arrName = i + 1;
            dataForTitles_1.dataForTitle.memberList[arrName].forEach((item, index) => {
                if (item.name === '')
                    try {
                        dataForTitles_1.dataForTitle.memberList[arrName].splice(index, 10);
                    }
                    catch (_a) {
                    }
            });
        }
        try {
            dataForTitles_1.dataForTitle.columns[0].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 2, 18);
            dataForTitles_1.dataForTitle.columns[1].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 3, 18);
            dataForTitles_1.dataForTitle.columns[2].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 4, 18);
            dataForTitles_1.dataForTitle.columns[3].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 5, 18);
            dataForTitles_1.dataForTitle.columns[4].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 6, 18);
        }
        catch (_a) {
        }
        resolve(dataForTitles_1.dataForTitle);
    });
}
exports.startListGetData = startListGetData;
