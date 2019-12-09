<template>
  <div class="banner-swiper">
    <div class="swiper-top">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in bannerTop" :key="index">
          <img :src="item.imglink" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="ad">
        <span>广告</span>
      </div>
    </div>
    <div class="swiper-bottom">
      <div class="head-top">
        <span class="head-bg"></span><span class="text">理想生活上天猫</span>
        <strong
          ><span class="red">{{ activeIndex + 1 }}</span
          ><span>/</span><span>{{ brandsMore.length / 2 + 1 }}</span></strong
        >
      </div>
      <swiper :options="swiperOptionBottom" ref="mySwiper">
        <swiper-slide>
          <ul class="brandul">
            <li
              class="brandli"
              v-for="(item, index) in brandsMore"
              :key="index"
            >
              <a href="#">
                <img :src="item.imglink" alt="" />
              </a>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide v-for="(item, index) in goodsBannerMore" :key="index">
          <div class="goodsMain">
            <div class="left">
              <a href=""><img :src="item.left" width="251px" alt=""/></a>
            </div>
            <div class="right">
              <a href=""><img :src="item.right" width="251px" alt=""/></a>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    bannerTop: {
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
    },
    brands: {
      type: Array,
      default: function() {
        return [];
      }
    },
    goodsBanner: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      activeIndex: 0,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionBottom: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        on: {
          slideChangeTransitionEnd: () => {
            let swiper = this.$refs.mySwiper.swiper;
            this.activeIndex = swiper.activeIndex;
          }
        }
      }
    };
  },
  computed: {
    brandsMore: function() {
      return Array(12).fill(this.brands[0]);
    },
    goodsBannerMore: function() {
      return Array(6).fill(this.goodsBanner[0]);
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner-swiper
    margin-top 10px
    margin-left 10px
    height 512px
    width 520px
    .swiper-top
        position relative
        height 280px
        .ad
            position absolute
            left 0
            bottom 0
            z-index 90
            width 32px
            height 14px
            text-align center
            font-size 0
            border-top-right-radius 5px
            // line-height 24
            cursor pointer
            background #999999
            span
                display block
                width 28px
                height 14px
                font-size 2px
                color #f5f5f5
                padding 2px
    .swiper-bottom
        margin-top 15px
        .head-top
            position relative
            width 520px
            height 22px
            font-size 0
            .head-bg
                position absolute
                display inline-block
                top 2px
                left 0
                width 122px
                height 22px
                background url(./tmal-logo.png) no-repeat
            .text
                position absolute
                display inline-block
                top 1px
                left 135px
                height 22px
                line-height 22px
                font-size 12px
                color #666
            strong
                position absolute
                display inline-block
                top -121px
                right 6px
                height 22px
                line-height 22
                font-size 12px
                color #666666
                span
                  display inline-block
                  margin-right 2px
                .red
                  color red
        .swiper-container
            width 520px
            height 201px
            .swiper-wrapper
                .brandul
                    display flex
                    flex-wrap wrap
                    background: #fff
                    .brandli
                        width 129px
                        height 57px
                        text-align center
                        margin-top 10px
                        img
                            width 84px
                            height auto
                            margin-top 10px
                .goodsMain
                    display flex
                    .left, .right
                        margin-top 10px
                        flex 1
                        width 251px
                        height 190px
                        img
                            width 251px
                            height 190px
                    .left
                        margin-left 5px
            >>> .swiper-pagination
                span
                    background #ff1648
</style>
