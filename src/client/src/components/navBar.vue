<template>
  <nav aria-label="main navigation" class="navbar has-shadow" role="navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/" @click="closeBurger">
        <img style="width: 140px" src="https://cyclingrace.ru/images/rus-logo.svg">
      </router-link>
      <a :class="{ 'is-active' : menuActive}" aria-expanded="false" aria-label="menu" class="navbar-burger"
         role="button" @click="toggleBurger()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{ 'is-active' : menuActive}" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/" @click="closeBurger">Main</router-link>
        <router-link class="navbar-item" to="/screen" @click="closeBurger">Screen</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleBurger() {
      this.menuActive = !this.menuActive;
    },
    closeBurger() {
      this.menuActive = false;
    },
    goTo(url) {
      window.open(url);
    }
  }
});
</script>
