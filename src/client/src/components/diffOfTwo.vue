<template>
  <transition name="fade">
    <div v-if="data.isVisible & strictHide" class="screen">
      <div class="image">
        <img class="background" :src="pictureStatic" alt="picture">
      </div>
      <div class="data">
        <h1 class="timer">{{ substringClock(timers[0].clock) }}</h1>
        <h1 class="header">{{ data.lastCheckpoint }}</h1>
        <div ref="manLeft" class="manLeft">
          <h1 v-bind:style="{fontSize: fontSizeLeft}">
            {{ data.memberList[0].name }}</h1>
        </div>
        <div ref="manRight" class="manRight">
          <h1>
            {{ data.memberList[1].name }}</h1>
        </div>

        <table class="table iksweb">
          <tr>
            <td>{{ data.lastResult1.substring(1) }}</td>
            <td>{{ data.lastResult2.substring(1) }}</td>
          </tr>
          <tr>
            <td style="font-size: 20px">{{ diff1 }}</td>
            <td style="font-size: 20px">{{ diff2 }}</td>
          </tr>
        </table>
      </div>
    </div>
  </transition>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DiffOfTwo',
  data() {
    return {
      pictureStatic: require("../../public/split_new.png"),
      strictHide: true,
      data: {},
      lastResult1: '00:02.14',
      lastResult2: '00:00.00',
      diff1: '',
      diff2: '',
      fontSizeLeft: '35px',
      lastCheckpoint: '',
      timers: [
        {
          clock: '00:00.00',
          timeBegan: null,
          timeStopped: null,
          stoppedDuration: 0,
          started: null,
          running: false
        },
        {
          clock: '00:00.00',
          timeBegan: null,
          timeStopped: null,
          stoppedDuration: 0,
          started: null,
          running: false
        },
        {
          clock: '00:00.00',
          timeBegan: null,
          timeStopped: null,
          stoppedDuration: 0,
          started: null,
          running: false
        }
      ]

    };
  },
  computed: {
    // selectedPage () {
    //   this.selectedPage = data.page
    // }
  },
  methods: {
    getData() {
      this.data = JSON.parse(localStorage.getItem('data')).dataForDiffOfTwo
    },

    substringClock(data) {
      return data.substring(0, data.length - 1)
    },

    start(id) {
      if (this.timers[id].running) return;

      if (this.timers[id].timeBegan === null) {
        this.reset(id);
        this.timers[id].timeBegan = new Date();
      }

      if (this.timers[id].timeStopped !== null) {
        this.timers[id].stoppedDuration += (new Date() - this.timers[id].timeStopped);
      }

      this.clockRunning(id)
      this.timers[id].running = true;
    },

    stop(id) {
      console.log(this.timers)
      this.timers[id].running = false;
      this.timers[id].timeStopped = new Date();
      clearInterval(this.timers[id].started);
    },

    reset(id) {
      this.timers[id].running = false;
      clearInterval(this.timers[id].started);
      this.timers[id].stoppedDuration = 0;
      this.timers[id].timeBegan = null;
      this.timers[id].timeStopped = null;
      this.timers[id].clock = "00:00.00";
    },

    clockRunning(id) {
      this.timers[id].started = setInterval(() => {
        let currentTime = new Date()
            , timeElapsed = new Date(currentTime - this.timers[id].timeBegan - this.timers[id].stoppedDuration)
            , min = timeElapsed.getUTCMinutes()
            , sec = timeElapsed.getUTCSeconds()
            , ms = timeElapsed.getUTCMilliseconds()

        this.timers[id].clock =
            this.zeroPrefix(min, 2) + ":" +
            this.zeroPrefix(sec, 2) + "." +
            this.zeroPrefix(ms, 3)
      })
    },

    zeroPrefix(num, digit) {
      let zero = '';
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  },

  beforeMount() {
    //this.pictureStatic = localStorage.getItem('picture')
    this.getData()
    setInterval(() => {
      this.getData()
    }, 100);

    setInterval(() => {
      if (this.data.timer === 0) {
        this.stop(0)
      }
      if (this.data.timer === 1) {
        this.start(0)
      }

      if (this.data.diff1 === 'Timer') {
        this.start(1)
        this.diff1 = `+${(this.substringClock(this.timers[1].clock)).substring(1)}`
      } else {
        this.reset(1)
        this.diff1 = this.data.diff1
      }
      if (this.data.diff2 === 'Timer') {
        this.start(2)
        this.diff2 = `+${(this.substringClock(this.timers[2].clock)).substring(1)}`
      } else {
        this.reset(2)
        this.diff2 = this.data.diff2
      }
    }, 1)
  }
})
</script>

<style scoped>

.data {
  margin-top: -68px;
  width: 1920px;
}

.image {
  margin: 0 auto 0 6px;
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
  width: 320px;
}

.background {
  z-index: 0;
  object-fit: cover;
}

.timer {
  color: white;
  position: absolute;
  margin-top: 828px;
  margin-left: 872px;
  font-size: 30px;
  text-align: center;
  font-family: DecimaProA-BoldOblique, sans-serif;
  width: 190px;
}

.header {
  color: white;
  margin-top: 875px;
  margin-left: 133px;
  font-size: 30px;
  text-align: center;
  font-family: DecimaProA-BoldOblique, sans-serif;
  width: 190px;
}

.table {
  margin-left: 872px;
  margin-top: 918px;
  max-width: 191px;
  min-height: 84px;
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
}

table.iksweb td {
  font-size: 24px;
  color: #ffffff;
}

td {
  height: 48px;
  width: 81px;
  padding: 0 !important;
}

table.iksweb td, table.iksweb th {
  white-space: pre-wrap;
  line-height: 10px;
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