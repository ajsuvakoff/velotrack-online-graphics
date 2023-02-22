import fs from "fs";
export let data
export let dataForTitle = {
    isVisible: false,
    page: 1,
    columns: [
        {name: '', style: 'width:13%'},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''}
    ],
    memberList: {
        1: [],
        2: [],
        3: [],
        4: []
    }
}

export let dataForFinalProtocol = {
    isVisible: false,
    page: 1,
    columns: [
        {name: '', style: 'width:13%'},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''}
    ],
    memberList: {
        1: [],
        2: [],
    }
}


export let diffOfTwoSetting = {
    raceId: '6288',
    racer1Id: '1066',
    racer2Id: '1051'
}

export let dataForDiffOfTwo = {
    isVisible: true,
    memberList: [],
    lastSplit1: 0,
    lastSplit2: 0,
    lastResult1: '',
    lastResult2:'',
    lastCheckpoint: 'Старт',
    diff1: '',
    diff2: '',
    timer: 0
}

export function showTitle(title) {
    if (title === 1) {
        dataForTitle.isVisible = !dataForTitle.isVisible
    }
    if (title === 2) {
        dataForFinalProtocol.isVisible = !dataForFinalProtocol.isVisible
    }
}

export function readData() {
    fs.readFile("data.json", "utf-8", (err, jsonData) => {
        try {
            data = JSON.parse(jsonData)
        } catch (err) {
        }
    })
}

export let allTitles = {
    dataForTitle,
    dataForFinalProtocol,
    dataForDiffOfTwo
}