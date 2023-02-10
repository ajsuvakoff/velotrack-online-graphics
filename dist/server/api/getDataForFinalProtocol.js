"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalProtocolGetData = void 0;
const getDataFromCell_1 = require("../helpers/getDataFromCell");
const dataForTitles_1 = require("./dataForTitles");
function finalProtocolGetData() {
    return new Promise(function (resolve, reject) {
        (0, dataForTitles_1.readData)();
        dataForTitles_1.dataForFinalProtocol.memberList[1] = [];
        dataForTitles_1.dataForFinalProtocol.memberList[2] = [];
        dataForTitles_1.dataForFinalProtocol.memberList[3] = [];
        // dataForFinalProtocol.memberList[4] = []
        // dataForFinalProtocol.memberList[5] = []
        // dataForFinalProtocol.memberList[6] = []
        // dataForFinalProtocol.memberList[7] = []
        // dataForFinalProtocol.memberList[8] = []
        // dataForFinalProtocol.memberList[9] = []
        for (let i = 0; i < 10; i++) {
            dataForTitles_1.dataForFinalProtocol.memberList[1].push({
                number: i + 1,
                id: '',
                name: '',
                team: '',
                speedAvg: '',
                time: '',
                score: ''
            });
            dataForTitles_1.dataForFinalProtocol.memberList[2].push({
                number: i + 1,
                id: '',
                name: '',
                team: '',
                speedAvg: '',
                time: '',
                score: ''
            });
            dataForTitles_1.dataForFinalProtocol.memberList[3].push({
                number: i + 1,
                id: '',
                name: '',
                team: '',
                speedAvg: '',
                time: '',
                score: ''
            });
        }
        for (let i = 0; i < 10; i++) {
            dataForTitles_1.dataForFinalProtocol.memberList[1][i].id = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 26, 13 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[1][i].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 27, 13 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[1][i].team = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 28, 13 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[1][i].speedAvg = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 29, 13 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[1][i].time = '';
            dataForTitles_1.dataForFinalProtocol.memberList[1][i].score = '';
            dataForTitles_1.dataForFinalProtocol.memberList[2][i].id = '';
            dataForTitles_1.dataForFinalProtocol.memberList[2][i].name = '';
            dataForTitles_1.dataForFinalProtocol.memberList[2][i].team = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 26, 26 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[2][i].speedAvg = '';
            dataForTitles_1.dataForFinalProtocol.memberList[2][i].time = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 27, 26 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[2][i].score = '';
            dataForTitles_1.dataForFinalProtocol.memberList[3][i].id = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 26, 39 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[3][i].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 27, 39 + i);
            dataForTitles_1.dataForFinalProtocol.memberList[3][i].team = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 28, 39 + i);
        }
        for (let i = 0; i < 3; i++) {
            let arrName = i + 1;
            dataForTitles_1.dataForFinalProtocol.memberList[arrName].forEach((item, index) => {
                if (item.team === '')
                    try {
                        dataForTitles_1.dataForFinalProtocol.memberList[arrName].splice(index, 10);
                    }
                    catch (_a) {
                    }
            });
        }
        if (dataForTitles_1.dataForFinalProtocol.memberList[1].length > 0) {
            dataForTitles_1.dataForFinalProtocol.page = 1;
            try {
                dataForTitles_1.dataForFinalProtocol.columns[0].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 26, 12);
                dataForTitles_1.dataForFinalProtocol.columns[1].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 27, 12);
                dataForTitles_1.dataForFinalProtocol.columns[2].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 28, 12);
                dataForTitles_1.dataForFinalProtocol.columns[3].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 29, 12);
                dataForTitles_1.dataForFinalProtocol.columns[4].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 30, 12);
                dataForTitles_1.dataForFinalProtocol.columns[5].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 31, 12);
            }
            catch (_a) {
            }
        }
        if (dataForTitles_1.dataForFinalProtocol.memberList[2].length > 0) {
            dataForTitles_1.dataForFinalProtocol.page = 2;
            try {
                dataForTitles_1.dataForFinalProtocol.columns[0].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 26, 25);
                dataForTitles_1.dataForFinalProtocol.columns[1].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 27, 25);
                dataForTitles_1.dataForFinalProtocol.columns[2].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 28, 25);
                dataForTitles_1.dataForFinalProtocol.columns[3].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 29, 25);
                dataForTitles_1.dataForFinalProtocol.columns[4].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 30, 25);
            }
            catch (_b) {
            }
        }
        if (dataForTitles_1.dataForFinalProtocol.memberList[3].length > 0) {
            dataForTitles_1.dataForFinalProtocol.page = 3;
            try {
                dataForTitles_1.dataForFinalProtocol.columns[0].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 26, 38);
                dataForTitles_1.dataForFinalProtocol.columns[1].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 27, 38);
                dataForTitles_1.dataForFinalProtocol.columns[2].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 28, 38);
                dataForTitles_1.dataForFinalProtocol.columns[3].name = (0, getDataFromCell_1.getDataFromCell)(dataForTitles_1.data, 29, 38);
            }
            catch (_c) {
            }
        }
        resolve(dataForTitles_1.dataForFinalProtocol);
    });
}
exports.finalProtocolGetData = finalProtocolGetData;
