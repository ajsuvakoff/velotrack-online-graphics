"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromCell = void 0;
function getDataFromCell(data, column, line) {
    try {
        let field = `field${column}`;
        let dataInRow = data[line - 1];
        return (dataInRow[field]);
    }
    catch (_a) {
    }
}
exports.getDataFromCell = getDataFromCell;
