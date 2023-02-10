"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTitles = exports.readData = exports.showTitle = exports.dataForFinalProtocol = exports.dataForTitle = exports.data = void 0;
const fs_1 = __importDefault(require("fs"));
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
exports.dataForFinalProtocol = {
    isVisible: false,
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
    }
};
function showTitle(title) {
    if (title === 1) {
        exports.dataForTitle.isVisible = !exports.dataForTitle.isVisible;
    }
    if (title === 2) {
        exports.dataForFinalProtocol.isVisible = !exports.dataForFinalProtocol.isVisible;
    }
}
exports.showTitle = showTitle;
function readData() {
    fs_1.default.readFile("data.json", "utf-8", (err, jsonData) => {
        try {
            exports.data = JSON.parse(jsonData);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.readData = readData;
exports.allTitles = {
    dataForTitle: exports.dataForTitle,
    dataForFinalProtocol: exports.dataForFinalProtocol
};
