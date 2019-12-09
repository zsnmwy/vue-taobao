<template>
  <div class="categoriesSellect">
    <ul class="sellectUl">
      <li
        v-for="(arrayItem, index) in CategorySlice"
        :key="index"
        @mouseover="liinfo(arrayItem)"
      >
        <span v-for="(item, index) in arrayItem" :key="index" class="item"
          ><a href="#">{{ item.name }}</a
          ><span v-if="!(index === arrayItem.length - 1)" class="slice">/</span>
        </span>
        <span class="iconfont icon-arrow-up"></span>
      </li>
    </ul>
    <div class="item-show" v-if="mouseOverData">
      <div class="item-show-left">
        <div
          class="li-wrapper"
          v-for="(item, index) in mouseOverData"
          :key="index"
        >
          <h2>{{ item.name }}</h2>
          <ul>
            <span v-for="(item, index) in item.goods" :key="index">
              <a href="#">{{ item }}</a>
            </span>
          </ul>
        </div>
      </div>
      <div class="item-show-right">
        <h2>猜你喜欢</h2>
        <ul>
          <li v-for="(item, index) in guess" :key="index">
            <a href="#">
              <img :src="item.imglink" alt="" />
            </a>
            <a :href="item.imglink">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Category: {
      type: Array,
      default: function() {
        return [];
      }
    },
    guess: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      mouseOverData: []
    };
  },
  computed: {
    CategorySlice: function() {
      const category = this.Category;
      const liLength = 3;
      let tmp = [];
      for (let index = 0; index < category.length / liLength; index++) {
        let startNum = index * liLength;
        let endNum = liLength + startNum;
        let tmpArray = category.slice(startNum, endNum);
        tmp.push(tmpArray);
      }
      for (let index = 0; index < 3; index++) {
        tmp.push(...tmp);
      }
      return tmp;
    }
  },
  methods: {
    liinfo: function(arrayItem) {
      //   console.log(arrayItem);
      this.mouseOverData = arrayItem;
      //   console.log(this.mouseOverData);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/stylus/color.styl'

.categoriesSellect
    position relative
    padding-top 5px
    padding-bottom 3px
    background white
    border 1px solid $main-color-deep
    border-top none
    .sellectUl
        li
            position relative
            height 32px
            padding-left 25px
            padding-right 19px
            line-height 32px
            font-size 14px
            font-weight 400
            color #666666
            transition all 0.3s
            .item
                margin-right 5px
                .slice
                    margin-left 2px
            .icon-arrow-up
                position absolute
                right 10px
                top 0
                font-size 12px
            &:hover
                background #ffe4cd
                a
                    color $main-color-deep
            a:hover
                text-decoration underline
    .item-show
        position absolute
        overflow hidden
        visibility hidden
        // display none
        z-index -100
        right -696px
        top 0
        width 692px
        height 507px
        border 2px solid #F94A14
        background #FFF
        opacity 0
        transition all 0.3s
        .item-show-left
            display flex
            flex-direction column
            justify-content space-between
            width 415px
            height 489px
            overflow hidden
            margin 10px 12px 0 10px
            border-right 1px solid $black-lll
            h2
                margin-bottom 15px
                font-weight bold
            ul
                // margin-bottom 20px
                font-size 12px
                a
                    display inline-block
                    color #666666
                    margin-right 12px
                    white-space nowrap
                    line-height 26px
                    &:hover
                        color $main-color-deep
        .item-show-right
            position absolute
            right 0
            top 0
            width 252px
            h2
                margin-top 10px
                margin-bottom 10px
                text-align center
                font-size 14px
                font-weight 400
                color #333
            ul
                display flex
                flex-wrap wrap
                li
                    width 97px
                    height 143px
                    margin-left 18px
                    a
                        display inline-block
                        white-space nowrap
                        width 100%
                        overflow hidden
                        text-overflow ellipsis
                        font-size 12px
                        transition all 0.3s
                        &:nth-child(1)
                          background: #4f4f4f
                        &:hover
                            color $main-color-deep
                    img
                        display block
                        width 98px
                        transition all 0.3s
                        opacity 1
                        &:hover
                            opacity .9

    &:hover
        .item-show
            display block
            visibility visible
            opacity 1
            z-index 100
</style>
