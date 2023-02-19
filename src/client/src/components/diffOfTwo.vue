<template>
  <transition name="fade">
    <div v-if="data.isVisible & strictHide" class="screen">
      <div class="image">
        <img class="background" :src="pictureStatic" alt="picture">
      </div>
      <div ref="manLeft" class="manLeft">
          <h1 v-bind:style="{fontSize: fontSizeLeft}">
            {{ data.memberList[0].name }}</h1>
      </div>
      <div ref="manRight" class="manRight">
          <h1>
            Щщщщщщщщ Щщщщщфывфывщщщщ</h1>
      </div>

      <table class="table iksweb">
        <tr>
          <td>{{ result1.substring(1) }}</td>
          <td>{{ result2.substring(1) }}</td>
        </tr>
        <tr>
          <td>{{ diff2 }}</td>
          <td>{{ diff1 }}</td>
        </tr>
      </table>

    </div>
  </transition>
</template>

<script>
import {defineComponent} from 'vue';
import {apiPost} from "@/client/src/api/api";

export default defineComponent({
  name: 'DiffOfTwo',
  data() {
    return {
      pictureStatic: require("../../public/7.png"),
      strictHide: true,
      data: {
        isVisible: true,
        page: 1,
        memberList: []
      },
      result1: '',
      result2: '',
      diff1: '',
      diff2: '',
      fontSizeLeft: '35px'
    };
  },
  computed: {
    // selectedPage () {
    //   this.selectedPage = data.page
    // }
  },
  methods: {
    getResult(time1, time2) {

      let diff = (time1 - time2).toFixed(2)

      if (diff < 0) return ''
      else return `+${diff}`
    },
  },

  beforeMount() {

    // if (this.data.memberList.list1.length <= 0) {
    //   this.data = JSON.parse(localStorage.getItem('data')).dataForFinalProtocol
    // }
    //this.pictureStatic = localStorage.getItem('picture')

    setInterval(() => {

      apiPost('getTwoRacers', {
        'raceId': this.$route.query.raceId,
        'id1': this.$route.query.id1,
        'id2': this.$route.query.id2
      })
          .then(res => (this.data.memberList = res.data))


      this.result1 = this.data.memberList[0].result.split(':')[1] + `:` + this.data.memberList[0].result.split(':')[2]
      this.result2 = this.data.memberList[1].result.split(':')[1] + `:` + this.data.memberList[1].result.split(':')[2]
      this.diff1 = this.getResult(this.data.memberList[0].result_time, this.data.memberList[1].result_time)
      this.diff2 = this.getResult(this.data.memberList[1].result_time, this.data.memberList[0].result_time)

      //this.data = JSON.parse(localStorage.getItem('data')).dataForFinalProtocol


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

.nameLeft {
  width: fit-content;
}

.manLeft {
  color: white;
  position: absolute;
  margin-left: 546px;
  margin-top: 915px;
  font-size: 35px;
  text-align: center;
  width: 320px;
}

.manRight {
  color: white;
  position: absolute;
  margin-left: 1071px;
  margin-top: 915px;
  font-size: 35px;
  text-align: center;
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
  margin-left: 872px;
  margin-top: 916px;
  max-width: 180px;
  background-color: rgba(157, 66, 66, 0);
  font-family: DecimaProA, sans-serif;
  text-align: center;
}

/* Стили таблицы (IKSWEB) */
table.iksweb {
  text-decoration: none;
  border-collapse: collapse;
  text-align: center;
}

table.iksweb th {
  font-weight: normal;
  font-size: 30px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0);
}

table.iksweb td {
  font-size: 25px;
  color: #ffffff;
}

table.iksweb td, table.iksweb th {
  white-space: pre-wrap;
  padding: 14px 9px;
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