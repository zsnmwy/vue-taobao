<template>
  <div id="app">
    <v-header></v-header>
    <v-search></v-search>
    <div class="wrapper">
      <v-nav></v-nav>
      <v-main></v-main>
      <div class="goodShopWrapper">
        <v-goodShop
          sub-title="与品质生活不期而遇"
          style="margin-right: 10px;"
          :goodList="goodList"
        ></v-goodShop>
        <v-goodShop
          sub-title="献给聪明可爱的你"
          show-type="shop"
          :shopList="shopList"
        ></v-goodShop>
      </div>
      <v-taoShoopingRush :items="taoShoppingRushData"></v-taoShoopingRush>
      <v-smallBanner></v-smallBanner>
      <div class="shopLiveWrapper">
        <v-shopLive
          showType="shop"
          :items="shopLiveData.shop"
          subTitle="发现深藏的好店"
        ></v-shopLive>
        <v-shopLive
          showType="live"
          subTitle="你的爱豆直播等你哟!"
          :items="shopLiveData.live"
        ></v-shopLive>
      </div>
      <v-fashion></v-fashion>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import header from "./components/header/header.vue";
import search from "./components/search/search.vue";
import nav from "./components/nav/nav.vue";
import main from "./components/main/main.vue";
import goodShop from "./components/goodShop/goodShop";
import {
  goodList,
  shopList,
  taoShoppingRushData,
  shopLiveData
} from "./mockData";
import smallBanner from "./components/smallBanner/smallBanner";
import taoShoopingRush from "./components/taoShoopingRush/taoShoopingRush";
import shopLive from "./components/shopLive/shopLive";
import footer from "./components/footer/footer";
import fashion from "./components/fashion/fashion";

export default {
  components: {
    "v-header": header,
    "v-search": search,
    "v-nav": nav,
    "v-main": main,
    "v-goodShop": goodShop,
    "v-smallBanner": smallBanner,
    "v-taoShoopingRush": taoShoopingRush,
    "v-shopLive": shopLive,
    "v-footer": footer,
    "v-fashion": fashion
  },
  data() {
    return {
      goodList,
      shopList,
      taoShoppingRushData,
      shopLiveData
    };
  }
};
</script>

<style lang="stylus">
@import './common/stylus/color.styl'
.wrapper
  background $bg-color
  .goodShopWrapper, .shopLiveWrapper
    display: flex
    justify-content: space-between
    margin: 0 auto
    margin-top: 10px
    width: 1190px
  .goodShopWrapper
    margin-top: 20px
  .taoShoopingRush
    margin-top: 10px
</style>
