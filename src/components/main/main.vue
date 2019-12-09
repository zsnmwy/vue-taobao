<template>
  <div class="main">
    <v-categoriesSellect
      :Category="Category"
      :guess="guess"
    ></v-categoriesSellect>
    <v-banner-swiper
      :bannerTop="bannerTop"
      :brands="brands"
      :goodsBanner="goodsBanner"
    ></v-banner-swiper>
    <v-sub-column></v-sub-column>
    <v-column-right></v-column-right>
    <!--    <v-aside></v-aside>-->
  </div>
</template>

<script>
import categoriesSellect from "./categoriesSellect/categoriesSellect";
import bannerSwiper from "./banner-swiper/banner-swiper.vue";
import subColum from "./subColum/subColum.vue";
import columnRight from "./columnRight/columnRight.vue";
// import asideIndex from "../aside/aside";
import {
  mainCategory as Category,
  mainguess as guess,
  mainbannerTop as bannerTop,
  mainbrands as brands,
  maingoodsBanner as goodsBanner
} from "../../mockData";

export default {
  components: {
    "v-categoriesSellect": categoriesSellect,
    "v-banner-swiper": bannerSwiper,
    "v-sub-column": subColum,
    "v-column-right": columnRight
    // "v-aside": asideIndex
  },
  data() {
    return {
      Category,
      guess,
      bannerTop,
      brands,
      goodsBanner
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/color.styl"
  .main
    position: relative
    margin 0 auto
    width 1190px
    height 522px
    display flex
    .categoriesSellect
      width 188px
      height 522px
    .aside
      position absolute
      right: -60px
      top: 300px
      width: 50px
      background: red;
.main
  background: $bg-color
</style>
