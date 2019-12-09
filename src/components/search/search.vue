<template>
  <div class="search">
    <div class="search-wrapper">
      <div class="tbs-logo">
        <a href="#">
          <img src="./11-comming.gif" alt="" />
        </a>
      </div>
      <div class="tbs-search">
        <div class="search-bd">
          <div class="search-tab">
            <div class="search-tab-switch">
              <ul>
                <li
                  v-for="(item, index) in searchTabs.lists"
                  :key="index"
                  :class="{ active: searchTabs.isTure === index }"
                  @click="changeIndex(index)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="search-panel">
            <form action="#">
              <div class="search-button">
                <button>搜索</button>
              </div>
              <div class="search-panel-fields">
                <span
                  class="qr-close iconfont icon-49"
                  v-if="!searchMessages"
                ></span>
                <input
                  v-model="searchMessages"
                  :placeholder="recommendGoods"
                  type="text"
                  v-if="!searchMessages"
                />
                <input v-model="searchMessages" type="text" v-else />
                <span class="qr-close iconfont icon-zhaoxiangji"></span>
              </div>
            </form>
          </div>
        </div>
        <div class="search-footer-tab" v-show="searchFooterTab">
          <ul>
            <li v-for="(item, index) in searchFooterList" :key="index">
              <a href="#" :style="{ color: item.color }">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        :class="{ 'tbs-qr-wrapper': qrShow, 'tbs-qr-wrapper-close': !qrShow }"
      >
        <div class="qr" v-if="qrShow">
          <a href="#" class="qr-bd">
            <span class="mtb">手机淘宝</span>
            <img width="62px" src="./qr-bg.png" class="qrcode" />
          </a>
          <span
            @click="closeQR"
            class="qr-close iconfont icon-aui-icon-close"
            v-if="qrShow"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchFooterList } from "../../mockData";
export default {
  data() {
    return {
      qrShow: true,
      searchFooterTab: true,
      searchMessages: "",
      buttomBackground: "",
      recommendGoods: "连帽卫衣裙",
      searchTabs: {
        isTure: 0,
        lists: ["宝贝", "天猫", "店铺"]
      },
      searchFooterList
    };
  },
  methods: {
    closeQR() {
      this.qrShow = false;
    },
    changeIndex(index) {
      this.searchTabs.isTure = index;
      if (this.searchTabs.lists[index] === "天猫") {
        this.searchFooterTab = false;
      } else {
        this.searchFooterTab = true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/color.styl'
.search
  margin-top 5px
  width 100%
  height 130px
  color #ffffff
  .search-wrapper
    width 1190px
    margin 0 auto
    display flex
    justify-content space-between
    .tbs-logo
      display inline-block
      width 190px
      height 121px
    .tbs-search, .tbs-qr-wrapper
      margin-top 10px
    .tbs-search
      // margin 0 302px 0 258px
      width 630px
      height 87px
      // background #000
      .search-bd
        .search-tab
          width 632px
          height 22px
          margin-left 17px
          .search-tab-switch
            ul
              li
                float left
                width 36px
                height 22px
                margin-right 4px
                text-align center
                cursor pointer
                line-height 22px
                font-size 12px
                color #ffffff
                font-weight 700
                color $main-color-l
                background-repeat repeat-x
                border-top-right-radius 6px
                border-top-left-radius 6px
                &:hover
                  background-color #ffeee5
                  color #ff5400
                &.active
                  color #ffffff
                  background-image linear-gradient(to right , $main-color-l ,$main-color-deep 100%)
        .search-panel
          position relative
          display block
          width 556px
          height 40px
          .search-button
            position absolute
            display block
            right 0
            top 0
            z-index 100
            width 74px
            height 40px
            overflow hidden
            text-align center
            border-top-right-radius 20px
            border-bottom-right-radius 20px
            button
              width 100%
              height 100%
              border none
              font-size 18px
              font-weight 700
              color #ffffff
              background #FF4200
              background-image linear-gradient(to right,#ff9000 0,#ff5000 100%)
              background-repeat repeat-x
              cursor pointer
          .search-panel-fields
            position relative
            margin-right 74px
            border 2px solid #ff5000
            border-top-left-radius 20px
            border-bottom-left-radius 20px
            border-right none
            overflow hidden
            height 36px
            input
              width 422px
              height 24px
              padding 6px 0
              text-indent 10px
              font-size 12px
              outline none
              border none
              background #FFF
              &::placeholder
                color $black-ll
                text-indent 2rem
            .icon-49
              position absolute
              top 10px
              left 9px
              color #666666
              font-size 19px
            .icon-zhaoxiangji
              position absolute
              top 6px
              right 16px
              font-size 25px
              color #666666
      .search-footer-tab
        margin-top 13px
        ul
          li
            margin-right 3px
            float left
            font-size 12px
    .tbs-qr-wrapper-close
      width 76px
      height 90px
    .tbs-qr-wrapper
      width 74px
      height 88px
      border 1px solid #eee
      background #FFF
      .qr
        position relative
        .qr-close
          position absolute
          display block
          top -5px
          left -17px
          color $black-ll
          font-size 14px
          border 1px solid $black-lll
      .mtb
        margin 6px auto 0 auto
        margin-bottom 2px
        width 62px
        font-size 12px
        color #ff5000
        display block
        text-align center
      img
        display block
        margin 0 auto
</style>
