<template>
  <transition name="fade">
    <div v-if="data.isVisible & strictHide" class="screen">
      <div class="image">
        <img class="background" :src="pictureStatic">
      </div>
      <div class="header">
        <h1>Промежуточный протокол</h1>
      </div>
      <div class="table">
        <table class="iksweb">
          <tbody>
          <tr>
            <th width="6%">#</th>
            <th :style="key.style" v-for="key in data.columns">{{ columnNameHandler(key.name) }}</th>
          </tr>
          <tr v-for="member in data.memberList[data.page]">
            <td :style="style1">{{ member.number }}</td>
            <td :style="style2">{{ member.param1 }}</td>
            <td :style="style3">{{ member.param2 }}</td>
            <td :style="style4">{{ member.param3 }}</td>
            <td :style="style5">{{ member.param4 }}</td>
            <td :style="style6">{{ member.param5 }}</td>
            <td :style="style7">{{ member.param6 }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </transition>
</template>

<script>
import {defineComponent} from 'vue';
import {updateLayout} from "@/client/src/methods/updateLayout";
import {columnNameHandler} from "@/client/src/methods/columnNameHandler";

export default defineComponent({
  name: 'Prom',
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
      style1: '',
      style2: '',
      style3: '',
      style4: '',
      style5: '',
      style6: '',
      style7: ''
    };
  },
  computed: {
    // selectedPage () {
    //   this.selectedPage = data.page
    // }
  },
  methods: {
    updateLayout,
    columnNameHandler

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

      this.style2 = this.data.columns[0].style
      this.style3 = this.data.columns[1].style
      this.style4 = this.data.columns[2].style
      this.style5 = this.data.columns[3].style
      this.style6 = this.data.columns[4].style
      this.style7 = this.data.columns[5].style

    }, 300);
  }
  ,
})
;
</script>

<style scoped>

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
  margin-left: -60px;
  margin-top: 123px;
  font-size: 50px;
  text-align: center;
  font-family: DecimaProA-BoldOblique, sans-serif;
}

.table {
  margin-top: 175px;
  width: 1219px;
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
}

table.iksweb td {
  font-size: 35px;
  color: #ffffff;
}

table.iksweb td, table.iksweb th {
  white-space: pre-wrap;
  padding: 0 5px;
  line-height: 76px;
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