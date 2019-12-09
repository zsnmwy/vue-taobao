<template>
  <div class="showItem">
    <div class="head">
      <span class="title">{{ title }}</span>
      <span class="subTitle">{{ subTitle }}</span>
    </div>
    <div class="imgWrapper">
      <div class="left">
        <a href="#"
          ><img :src="imgBig" :alt="title" width="180px" height="180px"
        /></a>
      </div>
      <div class="right">
        <a href="#"> <img :src="imgsmall[0]" width="89px" height="89px"/></a
        ><a href="#"><img :src="imgsmall[1]" width="89px" height="89px"/></a>
      </div>
    </div>
    <div class="liveTips" v-if="showType === 'live'">
      <div class="button">
        <span>Live</span><span class="iconfont icon-arrow-up"></span>
      </div>
      <div class="tips">{{ liveTips }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    imgBig: {
      type: String,
      default: ""
    },
    imgsmall: {
      type: Array,
      default: function() {
        return [];
      }
    },
    showType: {
      type: String
    },
    liveTips: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.showItem
  position: relative
  width: 271px
  height: 222px
  .head
    overflow: hidden
    height: 16px
    .title
      font-size: 16px
      color: #333
      transition all 0.4s
    .subTitle
      margin-left: 10px
      font-size: 12px
      color #999
      width: 200px
      overflow: hidden
      text-overflow: ellipsis
  .imgWrapper
    display: flex
    margin-top: 10px
    .left
      a
        display: block
        height: 180px
        background: #4f4f4f
        img
          transition all .4s
          &:hover
            opacity: .8
    .right
      display: flex
      flex-direction: column
      margin-left: 2px
      a:nth-of-type(1)
        margin-bottom: 2px
      a
        display: block
        background: #4f4f4f
        height: 89px
        img
          transition all .4s
          &:hover
            opacity: .8
  .liveTips
    position: absolute
    bottom: 30px
    left: 10px
    display: flex
    text-align: center
    justify-content: center
    font-weight: normal
    .button
      display: flex
      color #4d4d4d
      justify-content: center
      align-items: center
      background: #ff2658
      border-radius 3px
      font-size: 1px
      text-align: center
      padding-left: 5px
      margin-right: 5px
      .icon-arrow-up
        font-size: 1px
    .tips
      color white
      font-size: 14px
  &:hover
    .head
      .title
        color #ff4501
</style>
