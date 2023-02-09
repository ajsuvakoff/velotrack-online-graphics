import {getDataFromCell} from "../helpers/getDataFromCell";
import {dataForFinalProtocol, data, readData, dataForTitle} from "./dataForTitles";

export function finalProtocolGetData() {
    return new Promise(function (resolve, reject) {

        readData()

        dataForFinalProtocol.memberList[1] = []
        dataForFinalProtocol.memberList[2] = []
        dataForFinalProtocol.memberList[3] = []
        // dataForFinalProtocol.memberList[4] = []
        // dataForFinalProtocol.memberList[5] = []
        // dataForFinalProtocol.memberList[6] = []
        // dataForFinalProtocol.memberList[7] = []
        // dataForFinalProtocol.memberList[8] = []
        // dataForFinalProtocol.memberList[9] = []


        for (let i = 0; i < 10; i++) {
            dataForFinalProtocol.memberList[1].push({
                number: i + 1,
                id: '',
                name: '',
                team: '',
                speedAvg: '',
                time: '',
                score: ''
            })
            dataForFinalProtocol.memberList[2].push({
                number: i + 1,
                id: '',
                name: '',
                team: '',
                speedAvg: '',
                time: '',
                score: ''
            })
            dataForFinalProtocol.memberList[3].push({
                number: i + 1,
                id: '',
                name: '',
                team: '',
                speedAvg: '',
                time: '',
                score: ''
            })
        }

        for (let i = 0; i < 10; i++) {

            dataForFinalProtocol.memberList[1][i].id = getDataFromCell(data, 26, 13 + i)
            dataForFinalProtocol.memberList[1][i].name = getDataFromCell(data, 27, 13 + i)
            dataForFinalProtocol.memberList[1][i].team = getDataFromCell(data, 28, 13 + i)
            dataForFinalProtocol.memberList[1][i].speedAvg = getDataFromCell(data, 29, 13 + i)
            dataForFinalProtocol.memberList[1][i].time = ''
            dataForFinalProtocol.memberList[1][i].score = ''


            dataForFinalProtocol.memberList[2][i].id = ''
            dataForFinalProtocol.memberList[2][i].name = ''
            dataForFinalProtocol.memberList[2][i].team = getDataFromCell(data, 26, 26 + i)
            dataForFinalProtocol.memberList[2][i].speedAvg = ''
            dataForFinalProtocol.memberList[2][i].time = getDataFromCell(data, 27, 26 + i)
            dataForFinalProtocol.memberList[2][i].score = ''

            dataForFinalProtocol.memberList[3][i].id = getDataFromCell(data, 26, 39 + i)
            dataForFinalProtocol.memberList[3][i].name = getDataFromCell(data, 27, 39 + i)
            dataForFinalProtocol.memberList[3][i].team = getDataFromCell(data, 28, 39 + i)

        }

        for (let i = 0; i < 3; i++) {
            let arrName = i + 1
            dataForFinalProtocol.memberList[arrName].forEach((item, index) => {
                if (item.team === '') try {
                    dataForFinalProtocol.memberList[arrName].splice(index, 10)
                } catch {
                }
            })
        }

        if (dataForFinalProtocol.memberList[1].length > 0) {
            dataForFinalProtocol.page = 1
            try {
                dataForFinalProtocol.columns[0].name = getDataFromCell(data, 26, 12)
                dataForFinalProtocol.columns[1].name = getDataFromCell(data, 27, 12)
                dataForFinalProtocol.columns[2].name = getDataFromCell(data, 28, 12)
                dataForFinalProtocol.columns[3].name = getDataFromCell(data, 29, 12)
                dataForFinalProtocol.columns[4].name = getDataFromCell(data, 30, 12)
                dataForFinalProtocol.columns[5].name = getDataFromCell(data, 31, 12)
            } catch {
            }
        }
        if (dataForFinalProtocol.memberList[2].length > 0) {
            dataForFinalProtocol.page = 2
            try {
                dataForFinalProtocol.columns[0].name = getDataFromCell(data, 26, 25)
                dataForFinalProtocol.columns[1].name = getDataFromCell(data, 27, 25)
                dataForFinalProtocol.columns[2].name = getDataFromCell(data, 28, 25)
                dataForFinalProtocol.columns[3].name = getDataFromCell(data, 29, 25)
                dataForFinalProtocol.columns[4].name = getDataFromCell(data, 30, 25)
            } catch {
            }
        }
        if (dataForFinalProtocol.memberList[3].length > 0) {
            dataForFinalProtocol.page = 3
            try {
                dataForFinalProtocol.columns[0].name = getDataFromCell(data, 26, 38)
                dataForFinalProtocol.columns[1].name = getDataFromCell(data, 27, 38)
                dataForFinalProtocol.columns[2].name = getDataFromCell(data, 28, 38)
                dataForFinalProtocol.columns[3].name = getDataFromCell(data, 29, 38)
            } catch {
            }
        }
        resolve(dataForFinalProtocol)
    })
}