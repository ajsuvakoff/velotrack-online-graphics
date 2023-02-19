import axios from "axios";
function getRacers(raceId) {
    return new Promise(function (resolve, reject) {
        axios.get(`https://api.results.zone/sputnik-liga-masterov-5-etap/races/${raceId}/results.json`)
            .then((res) => {
                resolve(res.data.items)
            }).catch(err => console.log(err))
    })
}

function findRacer(racers, id) {
    return new Promise(function (resolve, reject) {
        racers.forEach((racer) => {
            if (racer.bib === id) {
                resolve(racer)
            }
        })
    })
}

export function getTwoRacers(raceId, id1, id2) {
    return new Promise(function (resolve, reject) {
        getRacers(raceId).then((data) => {
            let racers = []
            findRacer(data, id1).then((data) => racers.push(data))
            findRacer(data, id2).then((data) => {
                racers.push(data)
                resolve(racers)
            })
        }).catch(err => reject(err))
    })
}