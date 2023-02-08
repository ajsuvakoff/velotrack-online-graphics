<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import startList from '@/client/components/startList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    startList
  },
});
</script>
