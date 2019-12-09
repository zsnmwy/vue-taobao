<template>
  <div class="columnRight">
    <div class="member-wrapper">
      <div class="member">
        <div class="member-bd">
          <div class="avater-wrapper">
            <a href="#"><img src="./getAvatar.jpeg" alt=""/></a>
          </div>
          <span class="member-nick-name"
            >Hi! <strong class="member-nick">{{ nickName }}</strong></span
          >
          <p>
            <a href="#"><span class="coin"></span>领淘金币抵钱</a
            ><a href="#"><span class="member-icon"></span>会员俱乐部</a>
          </p>
        </div>
        <div class="member-ft">
          <a href="#" v-for="(item, index) in memberItems" :key="index">
            <strong>{{ item.num }}</strong>
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
    <div class="tips">
      <p>网上有害信息举报专区</p>
      <span class="iconfont icon-arrow-up"></span>
    </div>
    <div class="notice">
      <div class="notice-hd">
        <ul>
          <li
            v-for="(item, index) in tablists"
            :key="index"
            :class="{ selected: index === activeIndex }"
            @mouseover.stop="overChangeIndex(index)"
          >
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="notice-bd">
        <ul
          v-for="(item, index) in tablists"
          :key="index"
          :class="{ selected: index === activeIndex }"
        >
          <li v-for="(New, index) in item.news" :key="index">
            {{ New }}
          </li>
        </ul>
      </div>
    </div>
    <div class="conve">
      <ul>
        <li v-for="(item, index) in conveItems" :key="index">
          <a href="#">
            <span :class="item.iconClass"></span>
            <p>{{ item.name }}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="aliapp">
      <div class="top">
        <span class="ali">阿里APP</span>
        <span class="more">更多</span>
        <span class="iconfont icon-arrow-up"></span>
      </div>
      <div class="apps">
        <ul>
          <li v-for="(item, index) in apps" :key="index">
            <a href="">
              <img :src="item.img" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName: "叫你饮水啦",
      memberItems: [
        {
          num: 1,
          name: "待收货"
        },
        {
          num: 3,
          name: "待发货"
        },
        {
          num: 2,
          name: "代付款"
        },
        {
          num: 3,
          name: "待评价"
        }
      ],
      tablists: [
        {
          name: "公告",
          news: [
            "95公益周阿里、腾讯等六家公司同台联合做公益",
            "淘宝造物节之城市秘密",
            "聚划算88红包省钱卡"
          ]
        },
        {
          name: "规则",
          news: [
            "新增《淘宝网汽配行业管理规范》公示通知",
            "《淘宝网区域零售服务说明》变更公示通知",
            "《淘宝网票务行业管理规范》变更公示通知",
            "《淘宝网数字娱乐市场须提供官方授权的商品目录》变更公示通知"
          ]
        },
        {
          name: "论坛",
          news: [
            "淘宝嘉年华招商",
            "在线职业培训招商",
            "金秋超值购招商",
            "运营神器年中大促"
          ]
        },
        {
          name: "安全",
          news: [
            "魔豆妈妈公益项目",
            "让母爱永不打烊！",
            "卖家注意：风险通报！",
            "售假获刑又起诉！"
          ]
        },
        {
          name: "公益",
          news: [
            "淘宝公益平台正式更名",
            "益起来商家招募即将截止",
            "卖家如何设置公益宝贝",
            "公益机构开店全攻略"
          ]
        }
      ],
      activeIndex: 0,
      conveItems: [
        {
          name: "充话费",
          iconClass: "phone"
        },
        {
          name: "旅行",
          iconClass: "trip"
        },
        {
          name: "车险",
          iconClass: "baoxian"
        },
        {
          name: "游戏",
          iconClass: "game"
        },
        {
          name: "彩票",
          iconClass: "caipiao"
        },
        {
          name: "电影",
          iconClass: "film"
        },
        {
          name: "酒店",
          iconClass: "cafe"
        },
        {
          name: "理财",
          iconClass: "economy"
        }
      ],
      apps: [
        {
          img: require("./taobao.webp")
        },
        {
          img: require("./tmal.webp")
        },
        {
          img: require("./jucount.webp")
        },
        {
          img: require("./alipay.webp")
        },
        {
          img: require("./wangwang.webp")
        }
      ]
    };
  },
  methods: {
    overChangeIndex: function(index) {
      setTimeout(() => {
        // console.log("over", index);
        this.activeIndex = index;
      }, 500);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/stylus/color.styl'
.columnRight
  margin-top 10px
  .member-wrapper
    width 290px
    height 145px
    background-size 290px 145px
    background-image url(./bg.png)
    background-repeat no-repeat
    background-position 0 0
    .member
      padding 3px 0 10px 0
      height 132px
      text-align center
      .member-bd
        width 290px
        height 91px
        .avater-wrapper
          display block
          margin 0 auto
          width 74px
          height 56px
          a
            display inline-block
            border 3px solid #fff
            border-radius 50%
            background-clip padding-box
            width 50px
            height 50px
            line-height 50px
            overflow hidden
        .member-nick-name
          display block
          line-height 17px
          height 17px
          text-align center
          font-size 12px
        p
          height 17px
          line-height 17px
          font-size 12px
          a
            position relative
            margin-right 4px
            display inline-block
            border-radius 9px
            background-clip padding-box
            background #ffe4db
            padding 0 10px 0 20px
            border none
            .coin, .member-icon
              position absolute
              display inline-block
              top 0
              left 0
              vertical-align middle
            .coin
              width 16px
              height 18px
              line-height 18px
              background url(./sprite.png) no-repeat 0 -528px
            .member-icon
              width 17px
              height 17px
              line-height 17px
              background url(./sprite.png) no-repeat 0 -572px
      .member-ft
        margin-left 14px
        a
          float left
          display block
          margin-top 8px
          width 67px
          height 36px
          text-align center
          width 66px
          font-size 12px
          &:hover
              color $main-color-deep
              strong
                color #f40
          strong
            display block
            height 18px
            font-size 14px
            width 67px
            font-weight bold
            color #f40
  .tips
    position relative
    width 290px
    height 26px
    line-height 26px
    text-align center
    color #f40
    background #ffe4dd
    font-size 12px
    .icon-arrow-up
      position absolute
      right 43px
      top 0
      font-size 18px
  .notice
    width 290px
    height 98px
    padding-top 10px
    background white
    ul
      height 24px
      margin-top 4px
      overflow hidden
      margin-right -2px
      padding 0 8px
      cursor pointer
      li
        float left
        width 32px
        line-height 20px
        text-align center
        margin 0 11px
        font-size 12px
        &.selected
          padding 0
          border-bottom 2px solid #f40
          a
            font-weight 700
            color #3c3c3c
    .notice-bd
      ul
        display none
        margin 0 12px
        height 50px
        overflow hidden
        padding-top 9px
        padding-bottom 6px
        &:first-child
          li:first-child
            width 260px
        &.selected
          display block
        li
          display flex
          margin 0 10px 0 0
          flex-wrap wrap
          width 103px
          height 25px
          line-height 25px
          font-size 12px
          overflow hidden
          &:first-child
            color #f40

  .conve
    width 290px
    height 155px
    background #FFF
    border-top 1px solid #f4f4f4
    border-bottom 1px solid #f4f4f4
    ul
      display flex
      flex-wrap wrap
      li
        display flex
        justify-content center
        align-items center
        width 71px
        height 77px
        outline 1px red
        &:nth-child(2n)
          border-left 1px solid #f4f4f4
        &:nth-child(3)
          border-left 1px solid #f4f4f4
        &:nth-child(7)
          border-left 1px solid #f4f4f4
        &:nth-child(n)
          border-bottom 1px solid #f4f4f4
        a
          text-align center
          font-size 12px
          p
            margin-top 10px
          span
            display inline-block
            width 24px
            height 24px
            margin-top 11px
            background-repeat no-repeat
            background-image url(./sprite.png)
            &.phone
              width 20px
              height 25px
              background-position -2px 0
            &.trip
              width 24px
              height 21px
              background-position  0 -90px
            &.baoxian
              width 24px
              height 24px
              background-position 0 -44px
            &.game
              width 24px
              height 22px
              background-position 0 -133px
            &.caipiao
              width 24px
              height 25px
              background-position 0 -174px
            &.film
              width 24px
              height 22px
              background-position 0 -221px
            &.cafe
              width 24px
              height 26px
              background-position 0 -263px
            &.economy
              width 24px
              height 20px
              background-position 0 -310px
  .aliapp
    padding-top 10px
    background white
    .top
      width 276px
      height 30px
      padding-left 14px
      position relative
      .ali
        font-size 14px
        height 30px
      .more,.icon-arrow-up
        position absolute
        right 0
        top 0
        font-size 12px
      .more
        right 16px
        color #3c3c3c
      .icon-arrow-up
        right 5px
        color #3c3c3c
    .apps
      padding-bottom  8px
      ul
        display flex
        justify-content: space-around;
        li
          img
            width 32px
            height 32px
</style>
