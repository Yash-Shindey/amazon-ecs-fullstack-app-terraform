<template>
  <div id="app">
    <Nav v-if="$route.name!='Login'"/>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "app",
  components: {
    Nav,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  background-color: #1a202c;
}

#app {
  min-height: 100vh;
}

.main-content {
  padding-top: 80px; /* Height of navbar + some padding */
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
