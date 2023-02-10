"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvToJson = exports.downloadTable = void 0;
let csv = require("csvtojson");
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const getDataForStartList_1 = require("./getDataForStartList");
const url = 'https://docs.google.com/spreadsheets/u/0/d/1fxVA6Ujd1zzSq_al0caqv3SXHhOb8IYRcL2rKdi0Qxk/export?format=csv&id=1fxVA6Ujd1zzSq_al0caqv3SXHhOb8IYRcL2rKdi0Qxk&gid=2079613560';
function downloadTable() {
    return new Promise(function (resolve, reject) {
        {
            (0, axios_1.default)({
                url, method: 'GET'
            }).then((response) => {
                fs_1.default.writeFile("data.csv", response.data, "utf-8", (err) => {
                    if (err)
                        console.log(err);
                    else {
                        resolve("Data downloaded");
                    }
                });
            }).catch(err => reject(err.code));
        }
    });
}
exports.downloadTable = downloadTable;
function csvToJson() {
    return new Promise(function (resolve, reject) {
        downloadTable().then(() => {
            // Convert a csv file with csvtojson
            csv({ noheader: true })
                .fromFile('data.csv')
                .then(function (jsonArrayObj) {
                fs_1.default.writeFile("data.json", JSON.stringify(jsonArrayObj), "utf-8", (err) => {
                    if (err)
                        console.log(err);
                    else {
                        resolve("Data converted");
                        setTimeout(() => { (0, getDataForStartList_1.startListGetData)(); }, 4000);
                    }
                });
            });
        }).catch(err => reject(err));
    });
}
exports.csvToJson = csvToJson;
