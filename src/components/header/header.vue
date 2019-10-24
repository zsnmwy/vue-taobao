<template>
  <div class="header">
    <div class="header-top-wrapper">
      <div class="header-top">
        <div class="left">
          <ul>
            <li>
              <a href="#">中国大陆</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li>
              <a href="#">叫你饮水啦</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li>
              <a href="#">消息</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li><a href="#">手机逛淘宝</a></li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href="#">我的淘宝</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li>
              <a href="#"
                ><span class="iconfont icon-shoppingcartgouwuche"></span
                >购物车</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li>
              <a href="#">收藏夹</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li><a href="#">商品分类</a></li>
            <li class="space"></li>
            <li>
              <a href="#">千牛卖家中心</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li>
              <a href="#">联系客服</a
              ><span class="iconfont icon-arrowdown-copy"></span>
            </li>
            <li class="nav-index">
              <span class="iconfont icon-caidan"></span>
              <a href="#">网站导航</a
              ><span class="iconfont icon-arrowdown-copy"></span>
              <div class="nav">
                <div
                  class="nva-item"
                  v-for="(name, index) in items"
                  :key="index"
                >
                  <h3 :class="name.class">{{ name.name }}</h3>
                  <ul>
                    <li
                      :class="name.class + '-li-item'"
                      v-for="(item, index) in name.lists"
                      :key="index"
                    >
                      <a href="#">{{ item }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-wrapper">
        <a class="tmall-logo" href="#"><img src="./11-comming.png" alt=""/></a>
        <div class="right">
          <div class="list fl" v-for="(item, index) in images" :key="index">
            <a
              :style="`background-image: url(${item.background})`"
              :class="item.background"
              href="#"
            >
              <div class="desc-wrapper">
                <h4 class="title">{{ item.title }}</h4>
                <p class="subtitle">{{ item.subtitle }}</p>
              </div>
              <div class="img-outer">
                <img :src="item.outerImg" :alt="item.title" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "主题市场",
          class: "theme",
          lists: [
            "女装",
            "男装",
            "内衣",
            "鞋靴",
            "箱包",
            "婴童",
            "家电",
            "数码",
            "手机",
            "美妆",
            "珠宝",
            "眼镜",
            "手表",
            "运动",
            "户外",
            "乐器",
            "游戏",
            "动漫",
            "影视",
            "美食",
            "鲜花",
            "宠物",
            "农资",
            "房产",
            "装修",
            "建材",
            "家居",
            "百货",
            "汽车",
            "二手车",
            "办公",
            "定制",
            "教育",
            "卡券",
            "本地"
          ]
        },
        {
          name: "特色市场",
          class: "market",
          lists: [
            "爱逛街",
            "美妆秀",
            "全球购",
            "腔调",
            "淘女郎",
            "星店",
            "极有家",
            "阿里拍卖",
            "淘宝众筹",
            "飞猪",
            "亲宝贝",
            "闲鱼",
            "农资",
            "天天特卖",
            "Outlets",
            "俪人购",
            "聚名品",
            "淘抢购",
            "全球精选",
            "非常大牌",
            "试用",
            "量贩团",
            "阿里翻译"
          ]
        },
        {
          name: "阿里APP",
          class: "aliApp",
          lists: [
            "淘宝",
            "天猫",
            "支付宝",
            "聚划算",
            "飞猪",
            "蚂蚁聚宝",
            "旺信",
            "闲鱼",
            "阿里钱盾",
            "钉钉",
            "高德地图",
            "点点虫",
            "虾米音乐",
            "淘票票",
            "菜鸟裹裹",
            "爱逛街",
            "拍卖会",
            "阿里云",
            "网商银行",
            "阿里邮箱",
            "阿里众包"
          ]
        },
        {
          name: "精彩推荐集",
          class: "awesome",
          lists: [
            "余额宝",
            "大牌捡宝",
            "淘公仔",
            "浏览器",
            "淘宝香港",
            "淘宝台湾",
            "淘宝全球",
            "淘宝东南亚",
            "闺蜜淘货",
            "大众评审",
            "淘工作",
            "阿里巴巴认证"
          ]
        }
      ],
      images: [
        {
          background: require("./computer-bg.png"),
          title: "电脑会场",
          subtitle: "大牌立减400",
          outerImg: require("./ipad.webp")
        },
        {
          background: require("./sport-bg.png"),
          title: "运动爆款",
          subtitle: "抢百元神券",
          outerImg: require("./coat.webp")
        },
        {
          background: require("./shuma-bg.png"),
          title: "潮酷数码",
          subtitle: "24期分期免息",
          outerImg: require("./earphone.webp")
        },
        {
          background: require("./shoe-bg.png"),
          title: "大牌鞋靴",
          subtitle: "抢200大额券",
          outerImg: require("./shoe.webp")
        },
        {
          background: require("./computer-equip-bg.png"),
          title: "电脑装备",
          subtitle: "付定立减200",
          outerImg: require("./keyboard.webp")
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/color.styl'
.header-top-wrapper
    width 100%
    height 35px
    font-size 0
    background #f5f5f5
    .header-top
        margin 0 auto
        width 1190px
        ul > li
            margin-right 7px
            line-height 35px
            padding-left 10px
            &:hover
                background white
                a
                    color $main-color-l
            .icon-arrowdown-copy
                display inline-block
                vertical-align top
                margin-left 5px
                color #9c9c9c
                font-size 12px
            .icon-shoppingcartgouwuche
                display inline-block
                margin-right 5px
                vertical-align top
                font-size 12px
                color $main-color
            .icon-caidan
                display inline-block
                margin-right 5px
                vertical-align top
                font-size 12px
                color $main-color
        .left
            float left
            ul > li
                float left
                font-size 12px
        .right
            float right
            ul > li
                float left
                font-size 12px
            .space
              display inline-block
              width 1px
              height 10px
              margin 13px 10px 0 10px
              padding 0
              background #dddddd
            .nav-index
                position relative
                .nav
                    position absolute
                    z-index 999
                    display none
                    right 0
                    bottom -320px
                    width 0
                    height 0
                    background #ffffff
                    transition all 0.5s
                    .nva-item
                      width 700px
                      border-right 1px solid #eee
                      &:last-child
                        border-right none
                      &:not(:first-child)
                        margin-left 10px
                      h3
                        font-size 16px
                        font-weight 600
                        margin 5px 5px 5px 10px
                      ul
                        display flex
                        flex-wrap wrap
                        // margin-left 3px
                        text-align center
                        .theme-li-item
                          width 20%
                          &:hover
                            background $main-color
                            a
                              color #ffffff
                        .market-li-item
                          width 30%
                          &:hover
                            background #9fb838
                            a
                              color #ffffff
                        .aliApp-li-item
                          width 30%
                          &:hover
                            background #d75696
                            a
                              color #ffffff
                        .awesome-li-item
                          width 30%
                          &:hover
                            background #2e9fdb
                            a
                              color #ffffff
                        a
                          color $black
                      .theme
                        color #fc4200
                      .market
                        color #9fb838
                      .aliApp
                        color #d75696
                      .awesome
                        color #2e9fdb
                &:hover
                    .nav
                        display block
                        display flex
                        overflow hidden
                        right 0
                        bottom -365px
                        width 1184px
                        height 365px
.header-bottom
  height 100px
  width 100%
  background #d10757
  .header-bottom-wrapper
    width 1190px
    margin 0 auto
    display flex
    .tmall-logo
      padding 10px
      img
        width 80px
        height 80px
        display block
    .right
      display flex
      a
        display block
        position relative
        width 209px
        height 75px
        margin-right 10px
        margin-top 13px
        .desc-wrapper
          position absolute
          display block
          margin-left 20px
          margin-top 12px
          color white
          .title
            font-size 20px
            height 28px
            line-height 28px
          .subtitle
            line-height 20px
            height 16px
            font-size 14px
        .img-outer
          position absolute
          width 52px
          height 52px
          top 12px
          right 14px
          overflow hidden
          border-radius 5px
          background-clip padding-box
          background #fff
          img
            display block
            width 52px
            height 52px
</style>
