<template>
  <div class="footer">
    <div class="top"><i>END</i></div>
    <div class="help">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div class="title">
            <span class="iconfont" :class="icons[index]"></span>
            <span>{{ item.title }}</span>
          </div>
          <ul>
            <li v-for="(i, index) in item.lists" :key="index">
              <a href="#">{{ i }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      icons: ["icon-shield", "icon-wenhao", "icon-qianbao", "icon-taobao"],
      items: [
        {
          title: "消费者保障",
          lists: ["保障范围", "退货退款流程", "服务中心", "更多特色服务"]
        },
        {
          title: "新手上路",
          lists: [
            "新手专区",
            "消费警示",
            "交易安全",
            "24小时在线帮助",
            "免费开店"
          ]
        },
        {
          title: "付款方式",
          lists: ["快捷支付", "信用卡", "余额宝", "蚂蚁花呗", "货到付款"]
        },
        {
          title: "淘宝特色",
          lists: ["手机淘宝", "旺旺/旺信", "大众评审"]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/color.styl'
.footer
  margin: 0 auto
  background $bg-color
  width: 1190px
  margin-top: 10px
  .top
    display: flex
    position: relative
    align-items: center
    justify-content: center
    width: 1190px
    height: 50px
    i
      position: absolute
      text-align: center
      color #ccccd0
      left: 50%
      width: 84px
      line-height: 20px
      font-size: 18px
      margin-left: -42px
      top: 20px
      &::before, &::after
        content: ' '
        position: absolute
        height: 0
        line-height: 0
        border-top: 1px solid #e6e6e6
        width: 60px
        top: 50%
      &::before
        left: -70px
      &::after
        right -70px
  .help
    margin-top: 40px
    width: 1190px
    height: 140px
    ul
      display: flex
      justify-content: space-around
      li
        width: 197px
        .title
          display: flex
          align-items: center
          .iconfont
            font-size: 32px
            margin-right: 10px
            color #999
        ul
          margin-top: 20px
          display: block
          li
            display: inline-block
            margin-right: 5px
            font-size: 12px
            width auto
            &:hover
              a
                color #f40
</style>
