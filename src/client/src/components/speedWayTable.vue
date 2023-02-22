<template xmlns="http://www.w3.org/1999/html">
  <div class="screen">
    <div class="table">
      <table class="iksweb">
        <tr>
          <th v-for="key in data.columns" style="text-align: center; min-width: 43px; border: 5px solid #ffffff">
            {{ key.name }}
          </th>
        </tr>
        <tr v-for="member in data.memberList" :style="member.style">
          <td style="border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{ member.number }}</td>
          <td style="text-align: left; border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{
              member.name
            }}
          </td>
          <td style="border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{ member.city }}</td>
          <td style="border-right: 5px solid #ffffff">{{ member.score }}</td>
          <td :style="{backgroundColor:member.z21.color}">{{ member.z21.score }}</td>
          <td :style="{backgroundColor:member.z22.color}">{{ member.z22.score }}</td>
          <td :style="{backgroundColor:member.z23.color}">{{ member.z23.score }}</td>
          <td :style="{backgroundColor:member.z24.color}">{{ member.z24.score }}</td>
          <td style="border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{ member.score1 }}</td>
          <td :style="{backgroundColor:member.z25.color}">{{ member.z25.score }}</td>
          <td :style="{backgroundColor:member.z26.color}">{{ member.z26.score }}</td>
          <td :style="{backgroundColor:member.z27.color}">{{ member.z27.score }}</td>
          <td :style="{backgroundColor:member.z28.color}">{{ member.z28.score }}</td>
          <td style="border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{ member.score2 }}</td>
          <td :style="{backgroundColor:member.z29.color}">{{ member.z29.score }}</td>
          <td :style="{backgroundColor:member.z30.color}">{{ member.z30.score }}</td>
          <td :style="{backgroundColor:member.z31.color}">{{ member.z31.score }}</td>
          <td :style="{backgroundColor:member.z32.color}">{{ member.z32.score }}</td>
          <td style="border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{ member.score3 }}</td>
          <td :style="{backgroundColor:member.z33.color}">{{ member.z33.score }}</td>
          <td :style="{backgroundColor:member.z34.color}">{{ member.z34.score }}</td>
          <td :style="{backgroundColor:member.z35.color}">{{ member.z35.score }}</td>
          <td :style="{backgroundColor:member.z36.color}">{{ member.z36.score }}</td>
          <td style="border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{ member.score4 }}</td>
          <td :style="{backgroundColor:member.z37.color}">{{ member.z37.score }}</td>
          <td :style="{backgroundColor:member.z38.color}">{{ member.z38.score }}</td>
          <td :style="{backgroundColor:member.z39.color}">{{ member.z39.score }}</td>
          <td style="border-right: 5px solid #ffffff" :style="{backgroundColor:member.z40.color}">{{ member.z40.score }}
          </td>
          <td style="border-left: 5px solid #ffffff; border-right: 5px solid #ffffff">{{ member.scoreDayTwo }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

const red = 'rgba(255,0,0,0.5)'
const blue = 'rgba(0,196,255,0.5)'
const yellow = 'rgba(255,251,0,0.5)'
const white = 'rgba(255,255,255,0.5)'

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
          {name: 'СТ.№'},
          {name: 'Фамилия, Имя спортсмена'},
          {name: 'Город'},
          {name: '1 день'},
          {name: '21'},
          {name: '22'},
          {name: '23'},
          {name: '24'},
          {name: 'Сумма'},
          {name: '25'},
          {name: '26'},
          {name: '27'},
          {name: '28'},
          {name: 'Сумма'},
          {name: '29'},
          {name: '30'},
          {name: '31'},
          {name: '32'},
          {name: 'Сумма'},
          {name: '33'},
          {name: '34'},
          {name: '35'},
          {name: '36'},
          {name: 'Сумма'},
          {name: '37'},
          {name: '38'},
          {name: '39'},
          {name: '40'},
          {name: '2 день'},
        ],
        memberList: [
          {
            number: '1',
            name: 'Богданов Никита',
            city: 'Уфа',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: blue, score: '3'},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: red, score: '3'},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: yellow, score: '3'},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: white, score: '3'},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: white, score: '3'},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 15,
            scoreDayTwo: ''
          },
          {
            number: '2',
            name: 'Волков Матвей',
            city: 'Шадринск',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: red, score: '0'},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: blue, score: '1'},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: yellow, score: '1'},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: white, score: '1'},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: white, score: '2'},
            score: 7,
            scoreDayTwo: ''
          },
          {
            number: '3',
            name: 'Несытых Василий',
            city: 'Уфа',
            z21: {color: red, score: '3'},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: blue, score: '3'},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: white, score: '1'},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: red, score: '1'},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: yellow, score: 'Д'},
            score: 8,
            scoreDayTwo: ''
          },
          {
            number: '4',
            name: 'Свитек Симон',
            city: 'Тольятти',
            z21: {color: '', score: ''},
            z22: {color: red, score: '0'},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: white, score: '1'},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: blue, score: '1'},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: yellow, score: '0'},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: red, score: '0'},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 0,
            scoreDayTwo: ''
          },
          {
            number: '5',
            name: 'Валеев Динар',
            city: 'Уфа',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: red, score: '2'},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: blue, score: '2'},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: white, score: '3'},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: yellow, score: '1'},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: blue, score: '3'},
            score: 14,
            scoreDayTwo: ''
          },
          {
            number: '6',
            name: 'Большаков Иван',
            city: 'Каменск-Уральский',
            z21: {color: blue, score: '0'},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: white, score: '0'},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: yellow, score: '0'},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: red, score: '1'},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: white, score: '1'},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 3,
            scoreDayTwo: ''
          },
          {
            number: '7',
            name: 'Кононов Игорь',
            city: 'Тольятти',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: blue, score: '3'},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: red, score: '3'},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: yellow, score: '2'},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: white, score: '2'},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: blue, score: '2'},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 11,
            scoreDayTwo: ''
          },
          {
            number: '8',
            name: 'Бурмистров Артем',
            city: 'Шадринск',
            z21: {color: white, score: '1'},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: yellow, score: '0'},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: red, score: '1'},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: blue, score: '2'},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: red, score: '1'},
            z40: {color: '', score: ''},
            score: 2
          },
          {
            number: '9',
            name: 'Макаров Сергей ',
            city: 'Луховицы',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: yellow, score: '1'},
            score1: '',
            z25: {color: red, score: 'Д'},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: white, score: '0'},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: blue, score: '2'},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: white, score: '0'},
            z40: {color: '', score: ''},
            score: 5,
            scoreDayTwo: ''
          },
          {
            number: '10',
            name: 'Фадеев Владимир',
            city: 'Каменск-Уральский',
            z21: {color: yellow, score: '2'},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: red, score: '2'},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: blue, score: '2'},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: white, score: '0'},
            score4: '',
            z37: {color: yellow, score: '1'},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 7,
            scoreDayTwo: ''
          },
          {
            number: '11',
            name: 'Сайдуллин Игорь',
            city: 'Тольятти',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: white, score: '0'},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: yellow, score: '1'},
            score2: '',
            z29: {color: blue, score: '0'},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: red, score: '3'},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: yellow, score: 'Д'},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 5,
            scoreDayTwo: ''
          },
          {
            number: '12',
            name: 'Толокнов Никита',
            city: 'Тольятти',
            z21: {color: '', score: ''},
            z22: {color: blue, score: '2'},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: white, score: '1'},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: red, score: '3'},
            score3: '',
            z33: {color: yellow, score: '0'},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: red, score: '2'},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 6,
            scoreDayTwo: ''
          },
          {
            number: '13',
            name: 'Иванов Даниил',
            city: 'Тольятти',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: yellow, score: '2'},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: white, score: '3'},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: red, score: '2'},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: blue, score: '3'},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: blue, score: '3'},
            z40: {color: '', score: ''},
            score: 12,
            scoreDayTwo: ''
          },
          {
            number: '14',
            name: 'Солянников Дмитрий',
            city: 'Шадринск',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: white, score: '1'},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: yellow, score: '2'},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: blue, score: '3'},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: red, score: '2'},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: blue, score: '3'},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: 11,
            scoreDayTwo: ''
          },
          {
            number: '15',
            name: 'Хужин Иван',
            city: 'Тольятти',
            z21: {color: '', score: ''},
            z22: {color: yellow, score: '1'},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: blue, score: '0'},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: white, score: '0'},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: yellow, score: '0'},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: red, score: '1'},
            score: 1,
            scoreDayTwo: ''
          },
          {
            number: '16',
            name: 'Хомицевич Дмитрий',
            city: 'Каменск-Уральский',
            z21: {color: '', score: ''},
            z22: {color: white, score: '3'},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: yellow, score: '2'},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: red, score: '2'},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: blue, score: '3'},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: yellow, score: '2'},
            z40: {color: '', score: ''},
            score: 12,
            scoreDayTwo: ''
          },
          {
            number: '17',
            name: 'Буланкин Дмитрий',
            city: 'Уфа',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: '',
            scoreDayTwo: '',
            style: {'border-top': '5px solid #ffffff'}
          },
          {
            number: '18',
            name: 'Тарасов Никита',
            city: 'Уфа',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: '',
            scoreDayTwo: ''
          },
          {
            number: '19',
            name: 'Володин Сергей',
            city: 'Красногорск',
            z21: {color: '', score: ''},
            z22: {color: '', score: ''},
            z23: {color: '', score: ''},
            z24: {color: '', score: ''},
            score1: '',
            z25: {color: '', score: ''},
            z26: {color: '', score: ''},
            z27: {color: '', score: ''},
            z28: {color: '', score: ''},
            score2: '',
            z29: {color: '', score: ''},
            z30: {color: '', score: ''},
            z31: {color: '', score: ''},
            z32: {color: '', score: ''},
            score3: '',
            z33: {color: '', score: ''},
            z34: {color: '', score: ''},
            z35: {color: '', score: ''},
            z36: {color: '', score: ''},
            score4: '',
            z37: {color: '', score: ''},
            z38: {color: '', score: ''},
            z39: {color: '', score: ''},
            z40: {color: '', score: ''},
            score: '',
            scoreDayTwo: '',
            style: {'border-bottom': '5px solid #ffffff'}
          }
        ]
      },
    };
  },
  methods: {
    isItNumber(data) {
      if (data === 'СХ' || data === 'Д' || data === 'НС' || data === '0') {
        return '0'
      } else {
        return data
      }
    },

    calculate() {
      this.data.memberList.forEach((member) => {

        member.score1 = +(this.isItNumber(member.z21.score)) + +(this.isItNumber(member.z22.score)) + Number(this.isItNumber(member.z23.score)) + Number(this.isItNumber(member.z24.score))
        member.score2 = +(this.isItNumber(member.score1)) + +(this.isItNumber(member.z25.score)) + +(this.isItNumber(member.z26.score)) + +(this.isItNumber(member.z27.score)) + +(this.isItNumber(member.z28.score))
        member.score3 = +(this.isItNumber(member.score2)) + +(this.isItNumber(member.z29.score)) + +(this.isItNumber(member.z30.score)) + +(this.isItNumber(member.z31.score)) + +(this.isItNumber(member.z32.score))
        member.score4 = +(this.isItNumber(member.score3)) + +(this.isItNumber(member.z33.score)) + +(this.isItNumber(member.z34.score)) + +(this.isItNumber(member.z35.score)) + +(this.isItNumber(member.z36.score))
        member.scoreDayTwo = +(this.isItNumber(member.score4)) + +(this.isItNumber(member.z37.score)) + +(this.isItNumber(member.z38.score)) + +(this.isItNumber(member.z39.score)) + (this.isItNumber(member.z40.score))
        //member.score = Number(this.isItNumber(member.score1) + Number(this.isItNumber(member.score2) + Number(this.isItNumber(member.score) + Number(this.isItNumber(member.score4)
      })
    }
  },

  beforeMount() {
    this.calculate()
    setInterval(() => {
      this.calculate()
    }, 500)
  },
});
</script>

<style>

html {
  overflow-y: hidden;
}

.screen {
  width: 1920px;
  height: 1080px;
  text-align: center;
  position: center;
  display: flex;
  align-items: center;
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
  margin: 0 auto;
  max-width: 1800px;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, 0);
  font-family: DecimaProA, sans-serif;
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
  font-size: 22px;
  color: #ffffff;
}

table.iksweb tr {
  height: 20px;
}

table.iksweb td, table.iksweb th {
  white-space: pre-wrap;
  padding: 10px 8px;
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