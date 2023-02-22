import {startListGetData} from "./getDataForStartList";
import {finalProtocolGetData} from "./getDataForFinalProtocol";
import {getDataForDiffOfTwo} from "./getDataForDiffOfTwo";
import {diffOfTwoSetting} from "./dataForTitles";

export function getAllData() {
    return new Promise(function (resolve, reject) {
        startListGetData().then(resolve).catch(err => reject(err))
        finalProtocolGetData().then(resolve).catch(err => reject(err))
        getDataForDiffOfTwo(diffOfTwoSetting.raceId, diffOfTwoSetting.racer1Id, diffOfTwoSetting.racer2Id).then(res => console.log(res))
    })
}