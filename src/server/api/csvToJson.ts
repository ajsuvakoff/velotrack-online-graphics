let csv = require("csvtojson");
import axios from "axios";
import fs from "fs";

const url = 'https://docs.google.com/spreadsheets/u/1/d/1NFp9nlmd8631_pmDhEva3PXneSs4l_sZLNsAQDkff9A/export?format=csv&id=1NFp9nlmd8631_pmDhEva3PXneSs4l_sZLNsAQDkff9A&gid=1014114897'

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
                        }
                    });
                })
        }).catch(err => reject(err))
    })
}


