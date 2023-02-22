<template>
  <div class="screen" :style="{backgroundColor: 'rgba(0,0,0,0)'}">
    <StartList/>
    <FinalProtocol/>
    <!--  <SpeedWayTable/>-->
  </div>
</template>


<script>
import StartList from "@/client/src/components/startList";
import FinalProtocol from "@/client/src/components/finalProtocol";
import SpeedWayTable from "@/client/src/components/speedWayTable.vue";

export default {
  name: 'screen',
  components: {SpeedWayTable, StartList, FinalProtocol},
  data() {
    return {};

  },

  methods: {

    saveToStorage(key, data) { // Сохранение в localStorage
      localStorage.setItem(`${key}`, data);
    },

    WSconnect() {
      const WS = new WebSocket(`ws://${window.location.hostname}`);

      WS.onopen = () => console.log('Соединение WS установлено');
      WS.onmessage = event => {
        localStorage.setItem('data', event.data)
      };
      WS.onclose = event => {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);
        setTimeout(() => {
          this.WSconnect()
        }, 1000)
      };
    }

  },

  beforeMount() {
    this.WSconnect()
  }
};

</script>

<style>

.screen {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  font-family: DecimaProA, sans-serif;
}

[v-cloak] {
  display: none;
}

</style>
