let csv = require("csvtojson");
import axios from "axios";
import fs from "fs";
import {startListGetData} from "./getDataForStartList";

const url = 'https://docs.google.com/spreadsheets/u/0/d/1fxVA6Ujd1zzSq_al0caqv3SXHhOb8IYRcL2rKdi0Qxk/export?format=csv&id=1fxVA6Ujd1zzSq_al0caqv3SXHhOb8IYRcL2rKdi0Qxk&gid=2079613560'

export function downloadTable() {
    return new Promise(function (resolve, reject) {
            {
                axios({
                    url, method: 'GET'
                }).then((response) => {
                        fs.writeFile("data.csv", response.data, "utf-8", (err) => {
                            if (err) {
                            } else {
                                resolve("Data downloaded")
                            }
                        });
                    }
                ).catch(err => reject(err.code))
            }
        }
    )
}

export function csvToJson() {
    return new Promise(function (resolve, reject) {
        downloadTable().then(() => {

// Convert a csv file with csvtojson
            csv({noheader: true})
                .fromFile('data.csv')
                .then(function (jsonArrayObj: any[]) {
                    fs.writeFile("data.json", JSON.stringify(jsonArrayObj), "utf-8", (err) => {
                        if (err) {
                        } else {
                            resolve("Data converted")
                            setTimeout(() => {
                                startListGetData()
                            }, 4000)

                        }
                    });
                })
        }).catch(err => reject(err))
    })
}


