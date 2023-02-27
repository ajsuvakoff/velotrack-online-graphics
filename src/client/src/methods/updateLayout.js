export function updateLayout() {
    if (this.data.memberList[this.data.page].length === 1) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka1.png")
    } else if (this.data.memberList[this.data.page].length === 2) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka2.png")
    } else if (this.data.memberList[this.data.page].length === 3) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka3.png")
    } else if (this.data.memberList[this.data.page].length === 4) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka4.png")
    } else if (this.data.memberList[this.data.page].length === 5) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka5.png")
    } else if (this.data.memberList[this.data.page].length === 6) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka6.png")
    } else if (this.data.memberList[this.data.page].length === 7) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka7.png")
    } else if (this.data.memberList[this.data.page].length === 8) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka8.png")
    } else if (this.data.memberList[this.data.page].length === 9) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka9.png")
    } else if (this.data.memberList[this.data.page].length === 0) {
        this.strictHide = false
    } else {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka10.png")
    }
}