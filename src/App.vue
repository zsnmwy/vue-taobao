<template>
  <div id="app">
    <v-header></v-header>
    <v-search></v-search>
  </div>
</template>

<script>
import header from "./components/header/header.vue";
import search from "./components/search/search.vue";
export default {
  components: {
    "v-header": header,
    "v-search": search
  }
};
</script>

<style lang="stylus"></style>
