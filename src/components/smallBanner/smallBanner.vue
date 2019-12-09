<template>
  <div class="smallBanner">
    <a :href="goodsLink"><img :src="image" alt=""/></a>
  </div>
</template>

<script>
export default {
  name: "smallBanner",
  props: {
    goodsLink: {
      type: String,
      default:
        "https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201880.1&e=P49dX3dpqI4PO53EdXrfSxsQmLP5zomMAYVyMADTr7fELfZwOJqlEkxbajPWSDXvikCpTPquw6vrzRHz4LCJTACw4DWNSHyttbR9sxq9q4hbP149m5qBPD7zafLYqSDvXeYtML336HN4TqhkX6YhCNYUxtSR5ZiYYReLdResxZAH2RbMUsbVX1f5DElN9JmojqF7%2BsMXvG02Oq7XeQunuW4QKRz6oPRyETxQYQltHh2I1hfzoPU%2FGZSxE0htzM9nkIZkDS839qpkfaAtOJ8aSKUYf7HSx%2BHtHSxUtXYk2QO%2FtE4gexQ3vuheFqzBXHW61IyuPEN33bf4GlyGVeNedL%2BHtfYaFxhL9wTYdkmlEhFQf8bPtpc3f1UFasT2%2FxTJTcQzg3J5FhMW2wwwY4B1KG9ivudTfk7%2F%2FQoHxxromsUtAh%2BU%2Fm%2Fi9qhELXLPVQUX07I4Gg9TJlOlQ3twN%2FVWNR%2FylZEMeMzq&u=https%3A%2F%2Fshop65592378.taobao.com&k=481"
    },
    image: {
      type: String,
      default:
        "https://img.alicdn.com/simba/img/TB1T0IGjkL0gK0jSZFxSutWHVXa.jpg"
    }
  }
};
</script>

<style lang="stylus" scoped>
.smallBanner
  margin: 10px auto
  width: 1190px
</style>
