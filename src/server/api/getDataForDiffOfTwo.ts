import axios from "axios";
import {data, dataForDiffOfTwo} from "./dataForTitles";
import {getDataFromCell} from "../helpers/getDataFromCell";

export let dataFromJson

// function getRacers(raceId) {
//     return new Promise(function (resolve, reject) {
//         axios.get(`https://api.results.zone/sputnik-liga-masterov-5-etap/races/${raceId}/results.json`)
//             .then((res) => {
//                 resolve(res.data.items)
//             }).catch(err => console.log(err))
//     })
// }

// function findRacer(racers, id) {
//     return new Promise(function (resolve, reject) {
//         racers.forEach((racer) => {
//             if (racer.bib === id) {
//                 resolve(racer)
//             } else {
//             }
//         })
//     })
// }

// export function getTwoRacers(raceId, id1, id2) {
//     return new Promise(function (resolve, reject) {
//         getRacers(raceId).then((data) => {
//             let racers = []
//             findRacer(data, id1).then((data) => racers.push(data))
//             findRacer(data, id2).then((data) => {
//                 racers.push(data)
//                 resolve(racers)
//             })
//         }).catch(err => (err))
//     })
// }

export function getDataForDiffOfTwo() {

    return new Promise(function (resolve, reject) {

            axios.get('http://192.168.2.100/results', {
                auth: {
                    username: 'velo',
                    password: 'c567hFDK587jk'
                }
            }).then((data) => {

                dataFromJson = data.data

                updateData()
                dataForDiffOfTwo.timer = dataFromJson.gun
                dataForDiffOfTwo.lastSplit1 = handleDataFromJson(dataFromJson.start_position_1_split_name)
                dataForDiffOfTwo.lastSplit2 = handleDataFromJson(dataFromJson.start_position_2_split_name)
                dataForDiffOfTwo.lastResult1 = secToMin(dataFromJson.start_position_1_split_time)
                dataForDiffOfTwo.lastResult2 = secToMin(dataFromJson.start_position_2_split_time)
            }).catch(err => {})

        // getTwoRacers(raceId, id1, id2).then(racers => {
        //
        //         @ts-ignore
        //         dataForDiffOfTwo.memberList = racers
        //         dataForDiffOfTwo.lastResult1 = racers[0].result.split(':')[1] + `:` + racers[0].result.split(':')[2]
        //         dataForDiffOfTwo.lastResult2 = racers[1].result.split(':')[1] + `:` + racers[1].result.split(':')[2]
        //         dataForDiffOfTwo.diff1 = getResult(racers[1].result_time, racers[0].result_time)
        //         dataForDiffOfTwo.diff2 = getResult(racers[0].result_time, racers[1].result_time)
        //
        //
        //         let lastCheckpoint = ''
        //
        //         let lastCheckpointId1 = this.data.memberList[0].splits.length
        //         let lastCheckpointId2 = this.data.memberList[1].splits.length
        //
        //         if (lastCheckpointId1 > lastCheckpointId2) {
        //             lastCheckpoint = data.memberList[0].splits[lastCheckpointId1 - 1]
        //         } else if (lastCheckpointId2 > lastCheckpointId1) {
        //             lastCheckpoint = data.memberList[1].splits[lastCheckpointId1 - 1]
        //         } else {
        //             lastCheckpoint = data.memberList[0].splits[lastCheckpointId1 - 1]
        //         }
        //     }
    })
}

function updateData() {
    setInterval(() => {
        // ?????????????????? ???????????????????? ??????????????????
        if (dataForDiffOfTwo.lastSplit1 >= dataForDiffOfTwo.lastSplit2 && dataFromJson.start_position_1_split_name !== '--') {
            dataForDiffOfTwo.lastCheckpoint = dataFromJson.start_position_1_split_name
        } else if (dataForDiffOfTwo.lastSplit2 >= dataForDiffOfTwo.lastSplit1 && dataFromJson.start_position_2_split_name !== '--') {
            dataForDiffOfTwo.lastCheckpoint = dataFromJson.start_position_2_split_name
        } else {
            dataForDiffOfTwo.lastCheckpoint = '???? ????????????'
        }

        if (dataForDiffOfTwo.lastSplit1 - dataForDiffOfTwo.lastSplit2 === 0) {
            dataForDiffOfTwo.diff1 = getResult(dataFromJson.start_position_1_split_time, dataFromJson.start_position_2_split_time)
            dataForDiffOfTwo.diff2 = getResult(dataFromJson.start_position_2_split_time, dataFromJson.start_position_1_split_time)
        }

        if (dataForDiffOfTwo.lastSplit1 - dataForDiffOfTwo.lastSplit2 === 1) {
            dataForDiffOfTwo.diff1 = ''
            dataForDiffOfTwo.diff2 = 'Timer'
        }
        if (dataForDiffOfTwo.lastSplit2 - dataForDiffOfTwo.lastSplit1 === 1) {
            dataForDiffOfTwo.diff1 = 'Timer'
            dataForDiffOfTwo.diff2 = ''
        }


        if (dataForDiffOfTwo.lastSplit1 - dataForDiffOfTwo.lastSplit2 === 2 || dataForDiffOfTwo.lastSplit1 - dataForDiffOfTwo.lastSplit2 === 3) {
            dataForDiffOfTwo.diff2 = '+1 ????????'
            dataForDiffOfTwo.diff1 = ''
        }
        if (dataForDiffOfTwo.lastSplit2 - dataForDiffOfTwo.lastSplit1 === 2 || dataForDiffOfTwo.lastSplit2 - dataForDiffOfTwo.lastSplit1 === 3) {
            dataForDiffOfTwo.diff1 = '+1 ????????'
            dataForDiffOfTwo.diff2 = ''
        }

        if (dataForDiffOfTwo.lastSplit1 - dataForDiffOfTwo.lastSplit2 === 4 || dataForDiffOfTwo.lastSplit1 - dataForDiffOfTwo.lastSplit2 === 5) {
            dataForDiffOfTwo.diff1 = ''
            dataForDiffOfTwo.diff2 = '+2 ??????????'
        }
        if (dataForDiffOfTwo.lastSplit2 - dataForDiffOfTwo.lastSplit1 === 4 || dataForDiffOfTwo.lastSplit2 - dataForDiffOfTwo.lastSplit1 === 5) {
            dataForDiffOfTwo.diff1 = '+2 ??????????'
            dataForDiffOfTwo.diff2 = ''
        }

        dataForDiffOfTwo.name1 = getDataFromCell(data, 10, 14)
        dataForDiffOfTwo.name2 = getDataFromCell(data, 13, 14)
    }, 300)
}

function handleDataFromJson(splitName) {
    if (splitName === '--') {
        return 0
    }
    if (splitName === '167 ??') {
        return 1
    }
    if (splitName === '333 ??') {
        return 2
    }
    if (splitName === '500 ??') {
        return 3
    }
    if (splitName === '667 ??') {
        return 4
    }
    if (splitName === '833 ??') {
        return 5
    }
    if (splitName === '1000 ??') {
        return 6
    }
    if (splitName === '1167 ??') {
        return 7
    }
    if (splitName === '1333 ??') {
        return 8
    }
    if (splitName === '1500 ??') {
        return 9
    }
    if (splitName === '1667 ??') {
        return 10
    }
    if (splitName === '1833 ??') {
        return 11
    }
    if (splitName === '2000 ??') {
        return 12
    }
    if (splitName === '2167 ??') {
        return 13
    }
    if (splitName === '2333 ??') {
        return 14
    }
    if (splitName === '2500 ??') {
        return 15
    }
    if (splitName === '2667 ??') {
        return 16
    }
    if (splitName === '2833 ??') {
        return 17
    }
    if (splitName === '3000 ??') {
        return 18
    }
}

function secToMin(sec) {

    if (sec > 0) {
        let pad = function (num, size) {
                return ('000' + num).slice(size * -1);
            },
            time: any = parseFloat(sec).toFixed(3),
            minutes = Math.floor(time / 60) % 60,
            seconds = Math.floor(time - minutes * 60),
            milliseconds = time.slice(-3);

        return (pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + (pad(milliseconds, 3)).substring(0, milliseconds.length - 1))
    } else return ''
}

function getResult(time1, time2) {
    if (time1 || time2) {
        let diff = (time1 - time2).toFixed(2)
        // @ts-ignore
        if (diff < 0) return ''
        else return `+${(secToMin(diff)).substring(1)}`
    } else return ''
}