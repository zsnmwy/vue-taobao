<template>
  <div class="subColum">
    <div class="top">
      <a href="#"><img src="./shoe.webp" alt="shoe"/></a>
    </div>
    <div class="bottom">
      <h5>今日热卖</h5>
      <a href="#"><img src="./4G.jpg" alt=""/></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.subColum
    position relative
    margin 10px 10px 0 10px
    width 160px
    height 512px
    .top
        width 160px
        height 28px
    .bottom
        position absolute
        margin-top 1px
        width 160px
        height 230px
        left 0
        bottom -6px
        h5
            font-size 12px
            font-weight 400
            background #f1f1f1
            color #a1a1a1
            line-height 24px
            padding-top 6px
</style>
