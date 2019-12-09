<template>
  <div class="fashion">
    <div class="leftWrapper">
      <div class="title"><em>时尚爆料王</em></div>
      <div class="listWrapper">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <div class="titleDetail">{{ item.title }}</div>
            <div class="subTitle">{{ item.subTitle }}</div>
            <div class="imgWrapper">
              <img :src="item.imgs[0]" />
              <img :src="item.imgs[1]" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="rightWrapper">
      <img
        src="https://img.alicdn.com/simba/img/TB1M3v7QFYqK1RjSZLeSuvXppXa.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "fashion",
  data() {
    return {
      items: [
        {
          title: "腔调",
          subTitle: "全球创意设计师平台",
          imgs: [
            "https://img.alicdn.com/imgextra/i4/129/TB2wR1mf6oIL1JjSZFyXXbFBpXa_!!129-2-luban.png_120x120q90.jpg_.webp",
            "https://img.alicdn.com/imgextra/i2/165/TB2e0x7X138SeJjSZFPXXc_vFXa_!!165-2-luban.png_120x120q90.jpg_.webp"
          ]
        },
        {
          title: "全球购",
          subTitle: "探索全球美好生活",
          imgs: [
            "https://img.alicdn.com/imgextra/i4/105/TB2GLjObtqUQKJjSZFIXXcOkFXa_!!105-2-luban.png_120x120q90.jpg_.webp",
            "https://img.alicdn.com/imgextra/i2/190/TB2oU0EXaagSKJjy0FaXXb0dpXa_!!190-2-luban.png_120x120q90.jpg_.webp"
          ]
        },
        {
          title: "魅力惠",
          subTitle: "奢品好物立即购",
          imgs: [
            "https://img.alicdn.com/imgextra/i1/113/TB2aHnNdrsTMeJjy1zcXXXAgXXa_!!113-2-luban.png_120x120q90.jpg_.webp",
            "https://img.alicdn.com/imgextra/i4/37/TB2vUd6cRxRMKJjy0FdXXaifFXa_!!37-2-luban.png_120x120q90.jpg_.webp"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.fashion
  display: flex
  width: 1190px
  height: 290px
  margin: 0 auto
  margin-top: 10px
  .leftWrapper
    margin-right: 10px
    width: 840px
    height: 290px
    background: #fff
    .title
      position: relative
      padding-top: 5px
      padding-left: 32px
      &::before
        background-repeat: repeat-x
        background-image: linear-gradient(45deg, #8558d6, #b865e2)
        background: #8558d6
        content: ' '
        position: absolute
        width: 4px
        height: 16px
        top: 21px
        left: 20px
      em
        width: 808px
        height: 48px
        font-style: normal
        font-size: 20px
        line-height: 48px
        color: #AD45DF
        font-weight: bold
    .listWrapper
      ul
        display: flex
        li
          padding-top: 27px
          padding-left: 20px
          width: 100%
          height: 210px
          border-top: 1px solid #f4f4f4
          &:nth-child(1), &:nth-child(2)
            border-right: 1px solid #f4f4f4
          &:nth-child(2), &:nth-child(3)
            padding-left: 20px
          &:hover
            outline: 1px solid #ff5000
            border-top: 1px solid #f4f4f4
        .titleDetail
          font-size: 18px
          color #3c3c3c
        .subTitle
          font-size: 12px
          color #999999
          height: 25px
          line-height: 25px
        .imgWrapper
          margin-top: 10px
  .rightWrapper
    width: 340px
    height: 290px
    background: #fff
    display: flex
    align-items: center
    justify-content: center
    &:hover
      outline: 1px solid #ff5000
</style>
