<template>
  <div>
    <van-tabbar
      :value="active"
      active-color="#07c160"
      inactive-color="#000"
      @change="change"
    >
      <van-tabbar-item
        v-for="(item, key) in menu"
        :key="key"
        :icon="item.icon"
        >{{ item.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FooterOne',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      menu: [
        {
          icon: 'home-o',
          name: '主页',
          routerName: 'home',
        },
        {
          icon: 'search',
          name: '查找',
          routerName: 'search',
        },
        {
          icon: 'friends-o',
          name: '联系人',
          routerName: 'friends',
        },
        {
          icon: 'setting-o',
          name: '设置',
          routerName: 'setting',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      active: state => state.Menu.active,
    }),
  },
  methods: {
    ...mapMutations(['changeActive']),
    change(active) {
      this.$router.replace({ name: this.menu[active].routerName })
      this.changeActive(active)
    },
  },
}
</script>

<style scoped></style>
