<template>
  <div class="screen">
    <div class="table">
      <table class="iksweb">
        <tbody>
        <tr>
          <th v-for="key in data.columns" style="text-align: center; min-width: 40px">{{ key.name }}</th>
        </tr>
        <tr v-for="member in data.memberList">
          <td>{{ member.number }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.city }}</td>
          <td :style="{backgroundColor:member.z1.color}">{{ member.z1.score }}</td>
          <td :style="{backgroundColor:member.z2.color}">{{ member.z2.score }}</td>
          <td :style="{backgroundColor:member.z3.color}">{{ member.z3.score }}</td>
          <td :style="{backgroundColor:member.z4.color}">{{ member.z4.score }}</td>
          <td>{{ member.score1 }}</td>
          <td :style="{backgroundColor:member.z5.color}">{{ member.z5.score }}</td>
          <td :style="{backgroundColor:member.z6.color}">{{ member.z6.score }}</td>
          <td :style="{backgroundColor:member.z7.color}">{{ member.z7.score }}</td>
          <td :style="{backgroundColor:member.z8.color}">{{ member.z8.score }}</td>
          <td>{{ member.score2 }}</td>
          <td :style="{backgroundColor:member.z9.color}">{{ member.z9.score }}</td>
          <td :style="{backgroundColor:member.z10.color}">{{ member.z10.score }}</td>
          <td :style="{backgroundColor:member.z11.color}">{{ member.z11.score }}</td>
          <td :style="{backgroundColor:member.z12.color}">{{ member.z12.score }}</td>
          <td>{{ member.score3 }}</td>
          <td :style="{backgroundColor:member.z13.color}">{{ member.z13.score }}</td>
          <td :style="{backgroundColor:member.z14.color}">{{ member.z14.score }}</td>
          <td :style="{backgroundColor:member.z15.color}">{{ member.z15.score }}</td>
          <td :style="{backgroundColor:member.z16.color}">{{ member.z16.score }}</td>
          <td>{{ member.score4 }}</td>
          <td :style="{backgroundColor:member.z17.color}">{{ member.z17.score }}</td>
          <td :style="{backgroundColor:member.z18.color}">{{ member.z18.score }}</td>
          <td :style="{backgroundColor:member.z19.color}">{{ member.z19.score }}</td>
          <td :style="{backgroundColor:member.z20.color}">{{ member.z20.score }}</td>
          <td>{{ member.score }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue';
import {apiGet} from "@/client/src/api/api";

let red = 'rgba(255,0,0,0.5)'
let blue = 'rgba(0,196,255,0.5)'
let yellow = 'rgba(255,251,0,0.5)'
let white = 'rgba(255,255,255,0.5)'

export default defineComponent({
  name: 'SpeedWayTable',
  data() {
    return {
      pictureStatic: require("../../public/setka10.png"),
      strictHide: false,
      data: {
        isVisible: true,
        columns: [
          //{name: 'номер', style: 'width:13%'},
          {name: 'СТ№'},
          {name: 'Фамилия, Имя спортсмена'},
          {name: 'Город'},
          {name: '1'},
          {name: '2'},
          {name: '3'},
          {name: '4'},
          {name: 'Сумма'},
          {name: '5'},
          {name: '6'},
          {name: '7'},
          {name: '8'},
          {name: 'Сумма'},
          {name: '9'},
          {name: '10'},
          {name: '11'},
          {name: '12'},
          {name: 'Сумма'},
          {name: '13'},
          {name: '14'},
          {name: '15'},
          {name: '16'},
          {name: 'Сумма'},
          {name: '17'},
          {name: '18'},
          {name: '19'},
          {name: '20'},
          {name: 'Сумма очков'},
        ],
        memberList: [
          {
            number: '1',
            name: 'Богданов Никита',
            city: 'Уфа',
            z1: {color: red, score: ''},
            z2: {color: '', score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: blue, score: ''},
            z6: {color: '', score: ''},
            z7: {color: '', score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: white, score: ''},
            z11: {color: '', score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: yellow, score: ''},
            z14: {color: '', score: ''},
            z15: {color: '', score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: red, score: ''},
            z18: {color: '', score: ''},
            z19: {color: '', score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '2',
            name: 'Волков Матвей',
            city: 'Шадринск',
            z1: {color: blue, score: ''},
            z2: {color: '', score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: white, score: ''},
            z7: {color: '', score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: yellow, score: ''},
            z11: {color: '', score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: red, score: ''},
            z15: {color: '', score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: blue, score: ''},
            z19: {color: '', score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '3',
            name: 'Несытых Василий',
            city: 'Уфа',
            z1: {color: white, score: ''},
            z2: {color: '', score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: '', score: ''},
            z7: {color: yellow, score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: '', score: ''},
            z11: {color: white, score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: '', score: ''},
            z15: {color: blue, score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: '', score: ''},
            z19: {color: red, score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '4',
            name: 'Свитек Симон',
            city: 'Тольятти',
            z1: {color: yellow, score: ''},
            z2: {color: '', score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: '', score: ''},
            z7: {color: '', score: ''},
            z8: {color: red, score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: '', score: ''},
            z11: {color: '', score: ''},
            z12: {color: blue, score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: '', score: ''},
            z15: {color: '', score: ''},
            z16: {color: white, score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: '', score: ''},
            z19: {color: '', score: ''},
            z20: {color: yellow, score: ''},
            score: ''
          },
          {
            number: '5',
            name: 'Валеев Динар',
            city: 'Уфа',
            z1: {color: '', score: ''},
            z2: {color: red, score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: white, score: ''},
            z6: {color: '', score: ''},
            z7: {color: '', score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: blue, score: ''},
            z11: {color: '', score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: '', score: ''},
            z15: {color: yellow, score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: '', score: ''},
            z19: {color: '', score: ''},
            z20: {color: red, score: ''},
            score: ''
          },
          {
            number: '6',
            name: 'Большаков Иван',
            city: 'Каменск-Уральский',
            z1: {color: '', score: ''},
            z2: {color: white, score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: yellow, score: ''},
            z7: {color: '', score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: red, score: ''},
            z10: {color: '', score: ''},
            z11: {color: '', score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: '', score: ''},
            z15: {color: '', score: ''},
            z16: {color: blue, score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: '', score: ''},
            z19: {color: yellow, score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '7',
            name: 'Кононов Игорь',
            city: 'Тольятти',
            z1: {color: '', score: ''},
            z2: {color: blue, score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: '', score: ''},
            z7: {color: white, score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: '', score: ''},
            z11: {color: '', score: ''},
            z12: {color: yellow, score: ''},
            score3: '',
            z13: {color: red, score: ''},
            z14: {color: '', score: ''},
            z15: {color: '', score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: white, score: ''},
            z19: {color: '', score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '8',
            name: 'Бурмистров Артем',
            city: 'Шадринск',
            z1: {color: '', score: ''},
            z2: {color: yellow, score: ''},
            z3: {color: '', score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: '', score: ''},
            z7: {color: '', score: ''},
            z8: {color: blue, score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: '', score: ''},
            z11: {color: red, score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: white, score: ''},
            z15: {color: '', score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: blue, score: ''},
            z18: {color: '', score: ''},
            z19: {color: '', score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '9',
            name: 'Макаров Сергей ',
            city: 'Луховицы',
            z1: {color: '', score: ''},
            z2: {color: '', score: ''},
            z3: {color: white, score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: yellow, score: ''},
            z6: {color: '', score: ''},
            z7: {color: '', score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: '', score: ''},
            z11: {color: blue, score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: '', score: ''},
            z15: {color: '', score: ''},
            z16: {color: red, score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: red, score: ''},
            z19: {color: '', score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '10',
            name: 'Фадеев Владимир',
            city: 'Каменск-Уральский',
            z1: {color: '', score: ''},
            z2: {color: '', score: ''},
            z3: {color: red, score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: blue, score: ''},
            z7: {color: '', score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: '', score: ''},
            z11: {color: '', score: ''},
            z12: {color: white, score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: '', score: ''},
            z15: {color: white, score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: yellow, score: ''},
            z18: {color: '', score: ''},
            z19: {color: '', score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '11',
            name: 'Сайдуллин Игорь',
            city: 'Тольятти',
            z1: {color: '', score: ''},
            z2: {color: '', score: ''},
            z3: {color: blue, score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: '', score: ''},
            z7: {color: red, score: ''},
            z8: {color: '', score: ''},
            score2: '',
            z9: {color: yellow, score: ''},
            z10: {color: '', score: ''},
            z11: {color: '', score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: '', score: ''},
            z14: {color: yellow, score: ''},
            z15: {color: '', score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: '', score: ''},
            z19: {color: '', score: ''},
            z20: {color: white, score: ''},
            score: ''
          },
          {
            number: '12',
            name: 'Толокнов Никита',
            city: 'Тольятти',
            z1: {color: '', score: ''},
            z2: {color: '', score: ''},
            z3: {color: yellow, score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: '', score: ''},
            z7: {color: '', score: ''},
            z8: {color: white, score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: red, score: ''},
            z11: {color: '', score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: blue, score: ''},
            z14: {color: '', score: ''},
            z15: {color: '', score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: '', score: ''},
            z19: {color: blue, score: ''},
            z20: {color: '', score: ''},
            score: ''
          },
          {
            number: '13',
            name: 'Иванов Даниил',
            city: 'Тольятти',
            z1: {color: '', score: ''},
            z2: {color: '', score: ''},
            z3: {color: yellow, score: ''},
            z4: {color: '', score: ''},
            score1: '',
            z5: {color: '', score: ''},
            z6: {color: '', score: ''},
            z7: {color: '', score: ''},
            z8: {color: white, score: ''},
            score2: '',
            z9: {color: '', score: ''},
            z10: {color: red, score: ''},
            z11: {color: '', score: ''},
            z12: {color: '', score: ''},
            score3: '',
            z13: {color: blue, score: ''},
            z14: {color: '', score: ''},
            z15: {color: '', score: ''},
            z16: {color: '', score: ''},
            score4: '',
            z17: {color: '', score: ''},
            z18: {color: '', score: ''},
            z19: {color: blue, score: ''},
            z20: {color: '', score: ''},
            score: ''
          }
        ]
      },
    };
  },
  computed: {},
  methods: {},

  beforeMount() {

    setInterval(() => {
      this.data.memberList.forEach((member) => {
        member.score1 = Number(member.z1.score) + Number(member.z2.score) + Number(member.z3.score) + Number(member.z4.score)
        member.score2 = Number(member.z5.score) + Number(member.z6.score) + Number(member.z7.score) + Number(member.z8.score)
        member.score3 = Number(member.z9.score) + Number(member.z10.score) + Number(member.z11.score) + Number(member.z12.score)
        member.score4 = Number(member.z13.score) + Number(member.z14.score) + Number(member.z15.score) + Number(member.z16.score)

        member.score = member.score1 + member.score2 + member.score3 + member.score4
        //return Number(this.data.memberList[member].z5) + Number(this.data.memberList[member].z6) + Number(this.data.memberList[member].z7) + Number(this.data.memberList[member].z8)
      })
    }, 500)


    // if (this.data.memberList.list1.length <= 0) {
    //   this.data = JSON.parse(localStorage.getItem('data')).dataForTitle
    // }
    this.pictureStatic = localStorage.getItem('picture')

    // WS.onmessage = event => {
    //   console.log('ставлю дату')
    //
    //   console.log(event)
    //   // this.data = event.data;
    //   // localStorage.setItem('data', event.data)
    //   // this.isVisible = JSON.parse(event.data.isVisible);
    //
    //   // if (data.type === 'activeJobs') {
    //   //   this.uploadingFiles = data.data;
    //   // }
    // };


    setInterval(() => {

      //this.data = JSON.parse(localStorage.getItem('data')).dataForTitle

      // apiGet('startList').then(response => {
      //   this.data = response.data
      //   this.isVisible = response.data.isVisible
      //   localStorage.setItem('data', JSON.stringify(response.data))
      //   localStorage.setItem('picture', this.pictureStatic)
      // })
    }, 500);
  },
});
</script>

<style>

html {

}

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
}

.image {
  z-index: -999;
}

.background {
  z-index: 0;
  object-fit: cover;
}


.header {
  color: white;
  position: absolute;
  left: 740px;
  margin-top: -955px;
  font-size: 50px;
  text-align: center;
  font-family: DecimaProA-BoldOblique, sans-serif;
}

.table {
  position: absolute;
  left: 100px;
  top: 180px;
  margin: 0;
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
  font-size: 20px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0);
}

table.iksweb td {
  font-size: 30px;
  color: #ffffff;
}

table.iksweb tr {
  height: 20px;
}

table.iksweb td, table.iksweb th {
  white-space: pre-wrap;
  padding: 12px 10px;
  line-height: 19px;
  vertical-align: middle;
  border: 2px solid #ffffff;
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