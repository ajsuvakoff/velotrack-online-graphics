import {getDataFromCell} from "../helpers/getDataFromCell";
import {dataForFinalProtocol, data, readData} from "./dataForTitles";
export function finalProtocolGetData() {
    return new Promise(function (resolve, reject) {

        readData()

        dataForFinalProtocol.memberList[1] = []
        dataForFinalProtocol.memberList[2] = []
        dataForFinalProtocol.memberList[3] = []
        dataForFinalProtocol.memberList[4] = []

        if (dataForFinalProtocol.memberList[1].length <= 0) {
            for (let i = 0; i < 10; i++) {
                dataForFinalProtocol.memberList[1].push({number: i + 1, param1: '', param2: '', param3: '', param4: '', param5: '', param6: ''})
                dataForFinalProtocol.memberList[2].push({number: i + 11, param1: '', param2: '', param3: '', param4: '', param5: '', param6: ''})
                dataForFinalProtocol.memberList[3].push({number: i + 21, param1: '', param2: '', param3: '', param4: '', param5: '', param6: ''})
                dataForFinalProtocol.memberList[4].push({number: i + 31, param1: '', param2: '', param3: '', param4: '', param5: '', param6: ''})
            }
        }

        for (let i = 0; i < 10; i++) {

            dataForFinalProtocol.memberList[1][i].param1 = getDataFromCell(data,31, 13 + i)
            dataForFinalProtocol.memberList[1][i].param2 = getDataFromCell(data,32, 13 + i)
            dataForFinalProtocol.memberList[1][i].param3 = getDataFromCell(data,33, 13 + i)
            dataForFinalProtocol.memberList[1][i].param4 = getDataFromCell(data,34, 13 + i)
            dataForFinalProtocol.memberList[1][i].param5 = getDataFromCell(data,35, 13 + i)
            dataForFinalProtocol.memberList[1][i].param6 = getDataFromCell(data,36, 13 + i)

            dataForFinalProtocol.memberList[2][i].param1 = getDataFromCell(data,31, 23 + i)
            dataForFinalProtocol.memberList[2][i].param2 = getDataFromCell(data,32, 23 + i)
            dataForFinalProtocol.memberList[2][i].param3 = getDataFromCell(data,33, 23 + i)
            dataForFinalProtocol.memberList[2][i].param4 = getDataFromCell(data,34, 23 + i)
            dataForFinalProtocol.memberList[2][i].param5 = getDataFromCell(data,35, 23 + i)
            dataForFinalProtocol.memberList[2][i].param6 = getDataFromCell(data,36, 23 + i)

            dataForFinalProtocol.memberList[3][i].param1 = getDataFromCell(data,31, 33 + i)
            dataForFinalProtocol.memberList[3][i].param2 = getDataFromCell(data,32, 33 + i)
            dataForFinalProtocol.memberList[3][i].param3 = getDataFromCell(data,33, 33 + i)
            dataForFinalProtocol.memberList[3][i].param4 = getDataFromCell(data,34, 33 + i)
            dataForFinalProtocol.memberList[3][i].param5 = getDataFromCell(data,35, 33 + i)
            dataForFinalProtocol.memberList[3][i].param6 = getDataFromCell(data,36, 33 + i)

            dataForFinalProtocol.memberList[4][i].param1 = getDataFromCell(data,32, 43 + i)
            dataForFinalProtocol.memberList[4][i].param2 = getDataFromCell(data,32, 43 + i)
            dataForFinalProtocol.memberList[4][i].param3 = getDataFromCell(data,33, 43 + i)
            dataForFinalProtocol.memberList[4][i].param4 = getDataFromCell(data,34, 43 + i)
            dataForFinalProtocol.memberList[4][i].param5 = getDataFromCell(data,35, 43 + i)
            dataForFinalProtocol.memberList[4][i].param6 = getDataFromCell(data,36, 43 + i)
        }

        for (let i = 0; i < 4; i++) {
            let arrName = i + 1
            dataForFinalProtocol.memberList[arrName].forEach((item, index) => {
                if (item.param3 === '') try {
                    dataForFinalProtocol.memberList[arrName].splice(index, 10)
                } catch {
                }
            })
        }

        for (let i = 0; i < 4; i++) {
            dataForFinalProtocol.memberList[2].forEach((item, index) => {
                item.number = dataForFinalProtocol.memberList[1].length + index + 1
            })
            dataForFinalProtocol.memberList[3].forEach((item, index) => {
                item.number = dataForFinalProtocol.memberList[2].length + index + 1
            })
            dataForFinalProtocol.memberList[4].forEach((item, index) => {
                item.number = dataForFinalProtocol.memberList[3].length + index + 1
            })
        }

        for (let i = 0; i < 6; i++) { // получить названия столбцов
            try {
                dataForFinalProtocol.columns[i].name = getDataFromCell(data,31+i, 12)
            } catch {
            }
        }

        resolve(dataForFinalProtocol)
    })
}