<template>
  <div class="shopLive">
    <div class="title-header">
      <div class="logo" :class="showType"></div>
      <div class="subTitle">{{ subTitle }}</div>
    </div>
    <div class="contain-wrapper">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <v-showItem
            :title="item.title"
            :subTitle="item.subTitle"
            :imgBig="item.imgBig"
            :imgsmall="item.imgsmall"
            :showType="showType"
            :liveTips="item.liveTips"
          ></v-showItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import showItem from "./showItem";

export default {
  name: "shopLive",
  components: {
    "v-showItem": showItem
  },
  props: {
    showType: {
      type: String,
      default: "shop"
    },
    subTitle: {
      type: String,
      default: "subtitle"
    },
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
.shopLive
  box-sizing: border-box
  padding: 10px
  padding-left: 21px
  width: 590px
  height: 500px
  background: #fff
  .title-header
    display: flex
    align-items: center
    .logo
      &.shop , &.live
        margin-right: 5px
        display: block
        width: 72px
        height: 24px
      &.shop
        background: url("shop.png") no-repeat
        background-size: 72px 24px
      &.live
        background: url("live.png") no-repeat
        background-size: 72px 24px
    .subTitle
      color #999999
      font-weight: 400
      font-size: 12px
  .contain-wrapper
    margin-top: 20px
    ul
      li
        float: left
        width: 271px
        height: 222px
        &:nth-child(1), &:nth-child(3)
          margin-right: 10px
</style>
