import {startListGetData} from "./getDataForStartList";
import {finalProtocolGetData} from "./getDataForFinalProtocol";

export function getAllData() {
    return new Promise(function (resolve, reject) {
        startListGetData().then(resolve).catch(err => reject(err))
        finalProtocolGetData().then(resolve).catch(err => reject(err))
    })
}