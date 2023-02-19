<template>
  <transition name="fade">
    <div v-if="data.isVisible & strictHide" class="screen">
      <div class="image">
        <img class="background" :src="pictureStatic">
      </div>
      <div class="header">
        <h1>Итоговый протокол</h1>
      </div>
      <div class="table">
        <table class="iksweb">
          <tbody>
          <tr>
            <th width="6%">#</th>
            <th v-for="key in data.columns">{{ key.name }}</th>
          </tr>
          <tr v-for="member in data.memberList[data.page]">
            <td v-if="member.number">{{ member.number }}</td>
            <td v-if="member.id">{{ member.id }}</td>
            <td v-if="member.name">{{ member.name }}</td>
            <td v-if="member.team">{{ member.team }}</td>
            <td v-if="member.speedAvg">{{ member.speedAvg }}</td>
            <td v-if="member.time">{{ member.time }}</td>
            <td v-if="member.score">{{ member.score }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </transition>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FinalProtocol',
  data() {
    return {
      pictureStatic: require("../../public/setka10.png"),
      strictHide: false,
      data: {
        isVisible: false,
        page: 1,
        columns: [
          {name: 'номер', style: 'width:13%'},
          {name: 'ФИ'},
          {name: 'команда'},
          {name: 'заезд'},
          {name: 'старт'}
        ],
        memberList: {
          list1: [],
          list2: [],
          list3: [],
          list4: []
        }
      },
    };
  },
  computed: {
    // selectedPage () {
    //   this.selectedPage = data.page
    // }
  },
  methods: {
    updateLayout() {
      if (this.data.memberList[this.data.page].length === 2) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka2.png")
      } else if (this.data.memberList[this.data.page].length === 4) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka4.png")
      } else if (this.data.memberList[this.data.page].length === 6) {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka6.png")
      } else if (this.data.memberList[this.data.page].length === 0) {
        this.strictHide = false
      } else {
        this.strictHide = true
        this.pictureStatic = require("../../public/setka10.png")
      }
    }
  },

  beforeMount() {
    if (this.data.memberList.list1.length <= 0) {
      this.data = JSON.parse(localStorage.getItem('data')).dataForFinalProtocol
    }
    this.pictureStatic = localStorage.getItem('picture')
    this.updateLayout()

    setInterval(() => {

      this.data = JSON.parse(localStorage.getItem('data')).dataForFinalProtocol
      this.updateLayout()

    }, 500);
  },
});
</script>

<style scoped>

body {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  font-family: DecimaProA, sans-serif;
}

.screen {
  width: 1920px;
  height: 1080px;
  text-align: center;
  position: center;
  display: flex;
  align-items: baseline;
}

.image {
  margin: 0 auto;
  margin-left: 6px;
  position: absolute;
  z-index: -999;
}

.background {
  z-index: 0;
  object-fit: cover;
}


.header {
  color: white;
  margin-top: 123px;
  font-size: 50px;
  text-align: center;
  font-family: DecimaProA-BoldOblique, sans-serif;
}

.table {
  margin-top: 178px;
  width: 1219px;
  background-color: rgba(255, 255, 255, 0);
  font-family: DecimaProA, sans-serif;
  text-align: center;
}

/* Стили таблицы (IKSWEB) */
table.iksweb {
  text-decoration: none;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
}

table.iksweb th {
  font-weight: normal;
  font-size: 30px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0);
}

table.iksweb td {
  font-size: 40px;
  color: #ffffff;
}

table.iksweb td, table.iksweb th {
  white-space: pre-wrap;
  padding: 28.5px 5px;
  line-height: 19px;
  vertical-align: middle;
  border: 0 solid #000000;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>