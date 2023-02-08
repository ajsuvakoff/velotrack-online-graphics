<template>
  <div class="screen">
    <div class="image">
      <img style="height: 50vw" src="../../public/setka10.png">
    </div>
    <div class="header">
      <h1>Стартовый протокол</h1>
    </div>
    <div class="table">
      <table>
        <table class="iksweb">
          <tbody>
          <tr>
            <th width=30px>#</th>
            <th>ФИ</th>
            <th>команда</th>
            <th>заезд</th>
            <th>старт</th>
          </tr>
          <tr>
            <td>11</td>
            <td>АЙСУВАКОВ Роман</td>
            <td>Русские гонщики</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Фамилия</td>
            <td>Русские гонщики</td>
            <td>3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Фамилия</td>
            <td>Русские гонщики</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <td>99</td>
            <td>Фамилия</td>
            <td>Русские гонщики</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Фамилия</td>
            <td>Русские гонщики</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'startList',
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
  text-align: center;
  position: center;
}

.header {
  color: white;
  position: center;
  margin-top: -890px;
  font-size: 27px;
  font-family: DecimaProA-BoldOblique, sans-serif;
}

.table {
  position: fixed;
  margin-top: -52px;
  margin-left: 420px;
  width: 1060px;
}

/* Стили таблицы (IKSWEB) */
table.iksweb {
  text-decoration: none;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
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
  padding: 24.3px 5px;
  line-height: 19px;
  vertical-align: middle;
  border: 0px solid #ffffff;
}

</style>