"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startListGetData = exports.showTitle = exports.dataForTitle = void 0;
const fs_1 = __importDefault(require("fs"));
const getDataFromCell_1 = require("../helpers/getDataFromCell");
let data;
exports.dataForTitle = {
    isVisible: true,
    page: 1,
    columns: [
        { name: '', style: 'width:13%' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' }
    ],
    memberList: {
        1: [],
        2: [],
        3: [],
        4: []
    }
};
function showTitle() {
    exports.dataForTitle.isVisible = !exports.dataForTitle.isVisible;
}
exports.showTitle = showTitle;
function startListGetData() {
    return new Promise(function (resolve, reject) {
        fs_1.default.readFile("data.json", "utf-8", (err, jsonData) => {
            try {
                data = JSON.parse(jsonData);
            }
            catch (err) {
                console.log(err);
            }
        });
        exports.dataForTitle.memberList[1] = [];
        exports.dataForTitle.memberList[2] = [];
        exports.dataForTitle.memberList[3] = [];
        exports.dataForTitle.memberList[4] = [];
        if (exports.dataForTitle.memberList[1].length <= 0) {
            for (let i = 0; i < 10; i++) {
                exports.dataForTitle.memberList[1].push({ number: i + 1, id: '', name: '', team: '', zaezd: '', start: '' });
                exports.dataForTitle.memberList[2].push({ number: i + 11, id: '', name: '', team: '', zaezd: '', start: '' });
                exports.dataForTitle.memberList[3].push({ number: i + 21, id: '', name: '', team: '', zaezd: '', start: '' });
                exports.dataForTitle.memberList[4].push({ number: i + 31, id: '', name: '', team: '', zaezd: '', start: '' });
            }
        }
        for (let i = 0; i < 10; i++) {
            exports.dataForTitle.memberList[1][i].id = (0, getDataFromCell_1.getDataFromCell)(data, 2, 19 + i);
            exports.dataForTitle.memberList[1][i].name = (0, getDataFromCell_1.getDataFromCell)(data, 3, 19 + i);
            exports.dataForTitle.memberList[1][i].team = (0, getDataFromCell_1.getDataFromCell)(data, 4, 19 + i);
            exports.dataForTitle.memberList[1][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(data, 5, 19 + i);
            exports.dataForTitle.memberList[1][i].start = (0, getDataFromCell_1.getDataFromCell)(data, 6, 19 + i);
            exports.dataForTitle.memberList[2][i].id = (0, getDataFromCell_1.getDataFromCell)(data, 2, 29 + i);
            exports.dataForTitle.memberList[2][i].name = (0, getDataFromCell_1.getDataFromCell)(data, 3, 29 + i);
            exports.dataForTitle.memberList[2][i].team = (0, getDataFromCell_1.getDataFromCell)(data, 4, 29 + i);
            exports.dataForTitle.memberList[2][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(data, 5, 29 + i);
            exports.dataForTitle.memberList[2][i].start = (0, getDataFromCell_1.getDataFromCell)(data, 6, 29 + i);
            exports.dataForTitle.memberList[3][i].id = (0, getDataFromCell_1.getDataFromCell)(data, 2, 39 + i);
            exports.dataForTitle.memberList[3][i].name = (0, getDataFromCell_1.getDataFromCell)(data, 3, 39 + i);
            exports.dataForTitle.memberList[3][i].team = (0, getDataFromCell_1.getDataFromCell)(data, 4, 39 + i);
            exports.dataForTitle.memberList[3][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(data, 5, 39 + i);
            exports.dataForTitle.memberList[3][i].start = (0, getDataFromCell_1.getDataFromCell)(data, 6, 39 + i);
            exports.dataForTitle.memberList[4][i].id = (0, getDataFromCell_1.getDataFromCell)(data, 2, 49 + i);
            exports.dataForTitle.memberList[4][i].name = (0, getDataFromCell_1.getDataFromCell)(data, 3, 49 + i);
            exports.dataForTitle.memberList[4][i].team = (0, getDataFromCell_1.getDataFromCell)(data, 4, 49 + i);
            exports.dataForTitle.memberList[4][i].zaezd = (0, getDataFromCell_1.getDataFromCell)(data, 5, 49 + i);
            exports.dataForTitle.memberList[4][i].start = (0, getDataFromCell_1.getDataFromCell)(data, 6, 49 + i);
        }
        for (let i = 0; i < 4; i++) {
            let arrName = i + 1;
            exports.dataForTitle.memberList[arrName].forEach((item, index) => {
                if (item.name === '')
                    try {
                        exports.dataForTitle.memberList[arrName].splice(index, 10);
                    }
                    catch (_a) {
                    }
            });
        }
        try {
            exports.dataForTitle.columns[0].name = (0, getDataFromCell_1.getDataFromCell)(data, 2, 18);
            exports.dataForTitle.columns[1].name = (0, getDataFromCell_1.getDataFromCell)(data, 3, 18);
            exports.dataForTitle.columns[2].name = (0, getDataFromCell_1.getDataFromCell)(data, 4, 18);
            exports.dataForTitle.columns[3].name = (0, getDataFromCell_1.getDataFromCell)(data, 5, 18);
            exports.dataForTitle.columns[4].name = (0, getDataFromCell_1.getDataFromCell)(data, 6, 18);
        }
        catch (_a) {
        }
        resolve(exports.dataForTitle);
    });
}
exports.startListGetData = startListGetData;
