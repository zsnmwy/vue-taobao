<template>
  <div class="taoShoopingRush">
    <div class="header">
      <div class="left">
        <div class="logo"></div>
        <span>距结束</span>
        <div class="time">
          <countdown
            size="small"
            hour="10"
            minute="10"
            theme-color="#ff5000"
          ></countdown>
        </div>
      </div>
      <div class="right">
        <span>换一换</span>
        <span><a href="#">更多</a></span>
        <span class="iconfont icon-arrow-up"></span>
      </div>
    </div>
    <div class="goods">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <v-smallGood
            :img="item.img"
            :title="item.title"
            :tips="item.tips"
            :percent="item.percent"
            :price="item.price"
            :oldPrice="item.oldPrice"
            :buy="item.buy"
          ></v-smallGood>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import smallGood from "./smallGood";

export default {
  name: "taoShoopingRush",
  components: {
    "v-smallGood": smallGood
  },
  props: {
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.taoShoopingRush
  width: 1190px
  margin: 0 auto
  height: 264px
  background-color: #ffffff
  .header
    display: flex
    justify-content: space-between
    padding 20px
    box-sizing: border-box
    align-items: center
    .left
      display: flex
      justify-content: center
      align-items: center
      span
        color #999
        font-size: 12px
      .logo
        width: 85px
        height: 22px
        margin-right: 10px
        background: url("./taoqiang.png") no-repeat
        background-size: 85px 22px
    .right
      span
        color #999
        font-size: 12px
        &:nth-of-type(1)
          margin-left 10px
        &:nth-of-type(2)
          margin-left 5px
  .goods
    ul
      display: flex
      justify-content: space-between
      padding: 0 20px
      box-sizing: border-box
</style>
