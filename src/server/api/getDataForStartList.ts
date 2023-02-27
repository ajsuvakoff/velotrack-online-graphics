import {getDataFromCell} from "../helpers/getDataFromCell";
import {dataForTitle, data, readData} from "./dataForTitles";

export function startListGetData() {
    return new Promise(function (resolve, reject) {

        readData()

        dataForTitle.memberList[1] = []
        dataForTitle.memberList[2] = []
        dataForTitle.memberList[3] = []
        dataForTitle.memberList[4] = []

        if (dataForTitle.memberList[1].length <= 0) {
            for (let i = 0; i < 10; i++) {
                dataForTitle.memberList[1].push({
                    number: i + 1,
                    param1: '',
                    param2: '',
                    param3: '',
                    param4: '',
                    param5: ''
                })
                dataForTitle.memberList[2].push({
                    number: i + 11,
                    param1: '',
                    param2: '',
                    param3: '',
                    param4: '',
                    param5: ''
                })
                dataForTitle.memberList[3].push({
                    number: i + 21,
                    param1: '',
                    param2: '',
                    param3: '',
                    param4: '',
                    param5: ''
                })
                dataForTitle.memberList[4].push({
                    number: i + 31,
                    param1: '',
                    param2: '',
                    param3: '',
                    param4: '',
                    param5: ''
                })
            }
        }

        for (let i = 0; i < 10; i++) {

            dataForTitle.memberList[1][i].param1 = getDataFromCell(data, 1, 13 + i)
            dataForTitle.memberList[1][i].param2 = getDataFromCell(data, 2, 13 + i)
            dataForTitle.memberList[1][i].param3 = getDataFromCell(data, 3, 13 + i)
            dataForTitle.memberList[1][i].param4 = getDataFromCell(data, 4, 13 + i)
            dataForTitle.memberList[1][i].param5 = getDataFromCell(data, 5, 13 + i)

            dataForTitle.memberList[2][i].param1 = getDataFromCell(data, 1, 23 + i)
            dataForTitle.memberList[2][i].param2 = getDataFromCell(data, 2, 23 + i)
            dataForTitle.memberList[2][i].param3 = getDataFromCell(data, 3, 23 + i)
            dataForTitle.memberList[2][i].param4 = getDataFromCell(data, 4, 23 + i)
            dataForTitle.memberList[2][i].param5 = getDataFromCell(data, 5, 23 + i)

            dataForTitle.memberList[3][i].param1 = getDataFromCell(data, 1, 33 + i)
            dataForTitle.memberList[3][i].param2 = getDataFromCell(data, 2, 33 + i)
            dataForTitle.memberList[3][i].param3 = getDataFromCell(data, 3, 33 + i)
            dataForTitle.memberList[3][i].param4 = getDataFromCell(data, 4, 33 + i)
            dataForTitle.memberList[3][i].param5 = getDataFromCell(data, 5, 33 + i)

            dataForTitle.memberList[4][i].param1 = getDataFromCell(data, 1, 43 + i)
            dataForTitle.memberList[4][i].param2 = getDataFromCell(data, 2, 43 + i)
            dataForTitle.memberList[4][i].param3 = getDataFromCell(data, 3, 43 + i)
            dataForTitle.memberList[4][i].param4 = getDataFromCell(data, 4, 43 + i)
            dataForTitle.memberList[4][i].param5 = getDataFromCell(data, 5, 43 + i)
        }

        for (let i = 0; i < 4; i++) { // удаление пустых строк
            let arrName = i + 1
            dataForTitle.memberList[arrName].forEach((item, index) => {
                if (item.param2 === '') try {
                    dataForTitle.memberList[arrName].splice(index, 10)
                } catch {
                }
            })
        }

        for (let i = 0; i < 4; i++) { // нумерация страниц
            dataForTitle.memberList[2].forEach((item, index) => {
                item.number = dataForTitle.memberList[1].length + index + 1
            })
            dataForTitle.memberList[3].forEach((item, index) => {
                item.number = dataForTitle.memberList[2].length + index + 1
            })
            dataForTitle.memberList[4].forEach((item, index) => {
                item.number = dataForTitle.memberList[3].length + index + 1
            })
        }

        for (let i = 0; i < 5; i++) { // получить названия столбцов, отформатировать/скрыть
            try {
                dataForTitle.columns[i].name = getDataFromCell(data, i + 1, 12)
                if (dataForTitle.columns[i].name === 'ФИО' || dataForTitle.columns[i].name === 'ФИ') {
                    dataForTitle.columns[i].style = 'text-align: left'
                } else if (dataForTitle.columns[i].name === 'Время старта*' ) {
                    dataForTitle.columns[i].style = 'display: none'
                } else { dataForTitle.columns[i].style = '' }
            } catch {
            }
        }
        resolve(dataForTitle)
    })

}