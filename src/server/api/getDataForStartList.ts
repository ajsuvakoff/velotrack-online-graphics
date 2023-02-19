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
                dataForTitle.memberList[1].push({number: i + 1, id: '', name: '', team: '', zaezd: '', start: ''})
                dataForTitle.memberList[2].push({number: i + 11, id: '', name: '', team: '', zaezd: '', start: ''})
                dataForTitle.memberList[3].push({number: i + 21, id: '', name: '', team: '', zaezd: '', start: ''})
                dataForTitle.memberList[4].push({number: i + 31, id: '', name: '', team: '', zaezd: '', start: ''})
            }
        }

        for (let i = 0; i < 10; i++) {

            dataForTitle.memberList[1][i].id = getDataFromCell(data,  2, 19 + i)
            dataForTitle.memberList[1][i].name = getDataFromCell(data,3, 19 + i)
            dataForTitle.memberList[1][i].team = getDataFromCell(data,4, 19 + i)
            dataForTitle.memberList[1][i].zaezd = getDataFromCell(data,5, 19 + i)
            dataForTitle.memberList[1][i].start = getDataFromCell(data,6, 19 + i)

            dataForTitle.memberList[2][i].id = getDataFromCell(data,2, 29 + i)
            dataForTitle.memberList[2][i].name = getDataFromCell(data,3, 29 + i)
            dataForTitle.memberList[2][i].team = getDataFromCell(data,4, 29 + i)
            dataForTitle.memberList[2][i].zaezd = getDataFromCell(data,5, 29 + i)
            dataForTitle.memberList[2][i].start = getDataFromCell(data,6, 29 + i)

            dataForTitle.memberList[3][i].id = getDataFromCell(data,2, 39 + i)
            dataForTitle.memberList[3][i].name = getDataFromCell(data,3, 39 + i)
            dataForTitle.memberList[3][i].team = getDataFromCell(data,4, 39 + i)
            dataForTitle.memberList[3][i].zaezd = getDataFromCell(data,5, 39 + i)
            dataForTitle.memberList[3][i].start = getDataFromCell(data,6, 39 + i)

            dataForTitle.memberList[4][i].id = getDataFromCell(data,2, 49 + i)
            dataForTitle.memberList[4][i].name = getDataFromCell(data,3, 49 + i)
            dataForTitle.memberList[4][i].team = getDataFromCell(data,4, 49 + i)
            dataForTitle.memberList[4][i].zaezd = getDataFromCell(data,5, 49 + i)
            dataForTitle.memberList[4][i].start = getDataFromCell(data,6, 49 + i)
        }

        for (let i = 0; i < 4; i++) {
            let arrName = i + 1
            dataForTitle.memberList[arrName].forEach((item, index) => {
                if (item.name === '') try {
                    dataForTitle.memberList[arrName].splice(index, 10)
                } catch {
                }
            })
        }

        try {
            dataForTitle.columns[0].name = getDataFromCell(data,2, 18)
            dataForTitle.columns[1].name = getDataFromCell(data,3, 18)
            dataForTitle.columns[2].name = getDataFromCell(data,4, 18)
            dataForTitle.columns[3].name = getDataFromCell(data,5, 18)
            dataForTitle.columns[4].name = getDataFromCell(data,6, 18)
        } catch {
        }
        resolve(dataForTitle)
    })
}