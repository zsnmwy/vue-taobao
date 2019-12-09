<template>
  <div class="goodShop">
    <div class="title-header">
      <div class="left">
        <div class="titleImg" :class="showType"></div>
        <div class="subTitle">
          <span>{{ subTitle }}</span>
        </div>
      </div>
      <div class="more">
        <span>更多</span>
        <span class="iconfont icon-arrow-up"></span>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in showList" :key="index">
          <a href="#"><img :src="item.imglink"/></a>
          <div class="title">
            <span
              class="iconfont icon-douhao"
              v-if="shopList.length > 0"
            ></span>
            <span
              class="mainTitle"
              :class="shopList.length > 0 ? 'shopTitle' : 'goodTitle'"
              >{{ item.title }}</span
            >
            <span class="subTitle" v-if="goodList.length > 0">{{
              item.subTitle
            }}</span>
          </div>
          <div class="bottom">
            <div class="good" v-if="goodList.length > 0">
              <span class="iconfont icon-xiao"></span>{{ item.num }} 人说好
            </div>
            <div class="shop" v-if="shopList.length > 0">
              <div class="pic-wrapper">
                <img :src="item.pic" />
              </div>
              <p class="name">{{ item.name }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodShop",
  props: {
    showType: {
      type: String,
      default: "goods"
    },
    subTitle: {
      type: String,
      default: "some words"
    },
    goodList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    shopList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    showList: function() {
      if (this.goodList.length > 0) {
        return this.goodList;
        // return Array(6).fill(this.goodList[0]);
      }
      if (this.shopList.length > 0) {
        return this.shopList;
        // return Array(6).fill(this.shopList[0]);
      }
      return [];
    }
  }
};
</script>

<style lang="stylus" scoped>
.goodShop
  box-sizing: border-box
  padding: 10px
  padding-left: 21px
  width: 590px
  height: 658px
  background: #fff;
  .title-header
    display: flex
    flex-direction row
    align-items: center
    justify-content: space-between
    .left
      display: flex
      flex-direction: row
      align-items: center
      .goods, .shop
        margin-right: 5px
      .goods
        display: block
        width: 72px
        height: 24px
        background: url("./goods.png") no-repeat
        background-size: 72px 24px
      .shop
        display: block
        width: 72px
        height: 24px
        background: url("./shop.png") no-repeat
        background-size: 72px 24px
      .subTitle
        color #999999
        span
          font-weight: 400
          font-size: 12px
    .more
      font-size: 0
      span
        font-size: 12px
        color #999999
  .list
    margin-top: 20px
    ul
      display: flex
      flex-direction: row
      flex-wrap wrap
      justify-content: space-around
      li
        width: 180px
        a
          display: block
          height: 180px
          background: #4f4f4f
        img
          transition: all .4s
        img:hover
          opacity 0.8
        &:nth-child(-n+3)
          margin-bottom 35px
        .title
          margin-top: 10px
          .icon-douhao
            color #999999
          .mainTitle
            display: block
            margin-bottom: 5px
            padding-right: 5px
            font-size: 16px
            overflow: hidden
            color #3c3c3c
            font-weight: normal
            transition all .4s
            &:hover
              color: #ff9000 !important
            &.goodTitle
              white-space nowrap
              text-overflow ellipsis
            &.shopTitle
              color #999999
              display inline
              margin-left: 3px
              font-size: 14px
              line-height: 20px
          .subTitle
            display: block
            white-space nowrap
            overflow: hidden
            text-overflow: ellipsis
            font-size: 14px
            height: 24px
            line-height: 24px
            color #999999
        .bottom
          margin-top: 20px
          .good
            color: #35b1ff
            font-size: 14px
            .icon-xiao
              margin-right: 5px
          .shop
            display: flex
            flex-direction: row
            align-items: center
            .pic-wrapper
              margin-right: 5px
              width: 22px
              height: 22px
              border-radius 50%
              img
                display: block
                width: 100%
                height: 100%
            .name
              color: #999999
              font-size: 12px
</style>
