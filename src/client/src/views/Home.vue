<template>
  <NavBar/>
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
            <th>Стартовая таблица</th>
            <th>
              <button class="button is-danger" @click="visibleChange(1)">Тык</button>
            </th>
            <th>
              <div class="select">
                <select v-model="pageSelect" @change="selectPage(pageSelect)">
                  <option value=1>1</option>
                  <option value=2>2</option>
                  <option value=3>3</option>
                  <option value=4>4</option>
                </select>
              </div>
            </th>
          </tr>
          <tr>

            <th>Итоговая таблица</th>
            <th>
              <button class="button is-danger" @click="visibleChange(2)">Тык</button>
            </th>
            <th>
              <div class="select">
                <select v-model="pageSelect" @change="selectPage(pageSelect)">
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
</template>


<script>
import NavBar from '@/client/src/components/navBar';
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';
import {apiGet, apiPost} from '@/client/src/api/api';

const notyf = new Notyf({
  duration: 0,
  dismissible: true,
  position: {
    x: 'right',
    y: 'top'
  }
});

export default {
  name: 'home',
  components: {NavBar},
  data() {
    return {
      pageSelect: '1',
      description: ''
    };

  },
  computed: {
    // todo: implement
    // nameShortener(name) {
    //   if (name.length > 20) {
    //     // укоротить + добавить 3 точки
    //     return name;
    //   } else {
    //     return name;
    //   }
    // }
  },
  methods: {
    saveToStorage(key, data) { // Сохранение в localStorage
      // todo: отдельный класс который гетает и сетает и вызывается везде где нужно
      localStorage.setItem(`${key}`, data);
    },

    visibleChange(title) {
      apiPost('showTitle', {'title': title})
    },
    selectPage(pageId) {
      apiPost('selectPage', {'pageId': pageId})
    }
  }
}

</script>

<style>

html {
  background-color: rgba(255, 255, 255, 0);
}

[v-cloak] {
  display: none;
}

.container {
  margin-top: 35px;
}

</style>
