<template>
  <DiffOfTwo/>
</template>


<script>
import DiffOfTwo from "@/client/src/components/diffOfTwo.vue";

export default {
  name: 'screen',
  components: {DiffOfTwo},
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

<style scoped>

html {
  overflow-y: hidden;
}

[v-cloak] {
  display: none;
}

</style>
