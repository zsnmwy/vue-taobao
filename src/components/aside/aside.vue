<template>
  <div class="aside">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.link">
          <p>{{ item.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "asideIndex",
  data() {
    return {
      items: [
        {
          link: "#",
          name: "爱逛好货"
        },
        {
          link: "#",
          name: "好店直播"
        },
        {
          link: "#",
          name: "品质特色"
        },
        {
          link: "#",
          name: "实惠特卖"
        },
        {
          link: "#",
          name: "猜你喜欢"
        },
        {
          link: "#",
          name: "反馈"
        },
        {
          link: "#",
          name: "暴恐举报"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped></style>
