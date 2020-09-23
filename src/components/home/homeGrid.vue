<template>
  <div id="home-grid">
    <van-swipe class="my-swipe" :loop="false" indicator-color="orange">
      <van-swipe-item v-for="(item, key) in data" :key="key">
        <van-grid class="my-grid" :column-num="3">
          <van-grid-item
            v-for="(value, key2) in item"
            :key="key2"
            icon="photo-o"
            :text="value.name"
            @click="goto(value.routerName)"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Grid, GridItem, Swipe, SwipeItem } from 'vant'
export default {
  name: 'HomeGrid',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  created() {
    console.log(this.data)
  },
  methods: {
    goto(routerName) {
      if (routerName) {
        this.$router.push({ name: routerName })
      }
    },
  },
}
</script>

<style scoped lang="less">
#home-grid {
  .my-grid {
    margin-bottom: 30px;
  }
}
</style>
