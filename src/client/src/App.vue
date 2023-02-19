<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// todo: read about vuex
import '/node_modules/bulma/css/bulma.min.css';
import Home from '@/client/src/views/Home';
import Screen from '@/client/src/views/Screen';
import DiffOfTwo from '@/client/src/views/DiffOfTwo.vue';

export default {
  name: 'VeloGraphics',
  components: {
    Home, Screen, DiffOfTwo
  }
};

</script>

<style>

@font-face {
  font-family: "DecimaProA";
  src: url('@/client/public/assets/fonts/DecimaPro/Decima Pro A.otf');
}

@font-face {
  font-family: "DecimaProA-BoldOblique";
  src: url('@/client/public/assets/fonts/DecimaPro/Decima Pro A Bold Oblique.otf');
}

.notyf__toast {
  word-break: break-word;
}

.notyf__toast--success {
  background-color: #41c764;
}

.notyf__toast--error {
  background-color: #ee3e3d;
}


</style>
