<template>
  <NavBar/>
  <div class="backgroundColor" :style="{backgroundColor: '#B9B9B9FF'}">
    <div class="container">
      <div class="columns box">
        <div class="column is-6">
          <table class="table is-fullwidth">
            <thead>
            <td>Титр</td>
            <td>Show/hide</td>
            <td>Страница</td>
            </thead>
            <tfoot>
            <tr>
              <th>Стартовый протокол</th>
              <th>
                <button class="button is-danger" @click="visibleChange(1)">Тык</button>
              </th>
              <th>
                <div class="select">
                  <select v-model="pageSelectStart" @change="selectPage(1, pageSelectStart)">
                    <option value=1>1</option>
                    <option value=2>2</option>
                    <option value=3>3</option>
                    <option value=4>4</option>
                  </select>
                </div>
              </th>
            </tr>
            <tr>

              <th>Итоговый протокол</th>
              <th>
                <button class="button is-danger" @click="visibleChange(2)">Тык</button>
              </th>
              <th>
                <div class="select">
                  <select v-model="pageSelectFinal" @change="selectPage(2, pageSelectFinal)">
                    <option value=1>1</option>
                    <option value=2>2</option>
                    <option value=3>3</option>
                    <option value=4>4</option>
                  </select>
                </div>
              </th>
            </tr>
            </tfoot>
          </table>
        </div>
        <div class="column is-6">
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-8">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavBar from '@/client/src/components/navBar';
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';
import {apiGet, apiPost} from '@/client/src/api/api';
export default {
  name: 'Home',
  components: {NavBar},
  data() {
    return {
      pageSelectStart: '1',
      pageSelectFinal: '1',
      raceId: '',
      racer1Id: '',
      racer2Id: ''
    };

  },
  computed: {},

  methods: {
    saveToStorage(key, data) { // Сохранение в localStorage
      // todo: отдельный класс который гетает и сетает и вызывается везде где нужно
      localStorage.setItem(`${key}`, data);
    },

    visibleChange(title) {
      apiPost('showTitle', {'title': title})
    },
    selectPage(title, pageId) {
      apiPost('selectPage', {'title': title, 'pageId': pageId})
    },

    diffSet(raceId, racer1Id, racer2Id) {
      apiPost('diffOfTwoSet', {'raceId': raceId, 'racer1Id': racer1Id, 'racer2Id': racer2Id})
    }
  }
}

</script>

<style>

.backgroundColor {
  height: 100vh;
  width: 100vw;
  padding-top: 30px;
}

[v-cloak] {
  display: none;
}

th {
  font-size: 20px;
}

</style>
