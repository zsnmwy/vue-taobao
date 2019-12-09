<template>
  <div class="nav" style="background: $bg-color">
    <div class="nav-wrapper">
      <div class="nav-left"><h2>主题市场</h2></div>
      <div class="nav-right">
        <ul
          :class="`nav-right-${index}`"
          v-for="(item, index) in items"
          :key="index"
        >
          <li v-for="(item, index) in item.item" :key="index">{{ item }}</li>
          <span class="split" v-if="index != items.length - 1"></span>
        </ul>
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
          item: ["天猫", "聚划算", "天猫超市"]
        },
        {
          item: ["淘抢购", "电器城", "司法拍卖", "淘宝心选", "兴农扶贫"]
        },
        {
          item: ["飞猪旅行", "智能生活", "苏宁易购"]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/color.styl'
.nav
    .nav-wrapper
        margin 0 auto
        width 1190px
        height 30px
        .nav-left
            float left
            width 190px
            height 30px
            line-height 30px
            text-align center
            font-size 16px
            background $main-color-deep
            color #ffffff
        .nav-right
            float left
            color white
            line-height 30px
            width 1000px
            background linear-gradient(to right , $main-color-l ,$main-color-deep 100%)
            ul
                float left
                li
                    position relative
                    float left
                    margin 0 3px
                    padding 0 4px
                    &:hover
                        &:before
                                position: absolute
                                z-index -1
                                top: -16px
                                left: 50%
                                margin-left: -15px
                                content: "\e600"
                                font-family: iconfont
                                color: #ff5000
                                font-size: 29px
                    a
                        padding 0 5px
                        font-weight 700
            .nav-right-0
                li
                    font-size 16px
            .nav-right-1, .nav-right-2
                li
                    font-size 14px
            .split
                display inline-block
                margin 0 10px
                width 1px
                height 12px
                line-height 30
                background #ffffff
</style>
