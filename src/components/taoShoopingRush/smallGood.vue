<template>
  <div class="smallGood">
    <div class="left">
      <a href="#"><img :src="img" :alt="title"/></a>
    </div>
    <div class="right">
      <h3 class="title">{{ title }}</h3>
      <div class="middle">
        <div class="tips">{{ tips }}</div>
        <div class="progress">
          <span :style="{ width: percent + '%' }"></span>
        </div>
        <div class="percent">
          <div class="percent">{{ percent }}%</div>
          <div class="num">已抢{{ buy }}件</div>
        </div>
      </div>
      <div class="price">
        <div class="now"><span>¥</span>{{ price }}</div>
        <div class="old">¥{{ oldPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "smallGood",
  props: {
    img: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    percent: {
      type: Number,
      default: 10
    },
    price: {
      type: Number,
      default: 10
    },
    oldPrice: {
      type: Number,
      default: 10
    },
    buy: {
      type: Number,
      default: 10
    }
  }
};
</script>

<style lang="stylus" scoped>
.smallGood
  width: 355px
  height: 180px
  display: flex
  .right
    padding-top: 10px
    padding-left: 10px
    box-sizing: border-box
    .title
      font-size: 16px
      color #333
      font-weight: normal
      line-height: 22px
      transition all .4s
    .middle
      margin-top: 20px
      .tips
        font-size: 12px
        color #999
      .progress
        margin: 5px 0
        width: 100%
        height: 6px
        border-radius: 3px
        background: #ffe4dc
        span
          background: #fe3238
          display: block
          height: 6px
          border-radius: 3px
      .percent
        display: flex
        justify-content: space-between
        font-size: 12px
        color #fe3338
    .price
      display: flex
      align-items: baseline
      margin-top: 10px
      .now
        span
          margin-right: 5px
          font-size: 12px
          color #ff5000
        font-size: 20px
        color #ff5000
        margin-right: 10px
      .old
        color #999
        text-decoration: line-through
        font-size: 12px
  &:hover
    .right
      .title
        color: #ff5000
  .left
    a
      display: block
      background: #4f4f4f
      height: 180px
      img
        transition all 0.4s
        &:hover
          opacity: .8
</style>
