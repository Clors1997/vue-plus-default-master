<template>
  <div class="my-overlay">
    <van-overlay
      :show="sideBar"
      z-index="2000"
      lock-scroll
      @click="closeSideBar"
    >
      <div class="wrapper">
        <van-icon name="cross" class="footer-close" />
        <van-list
          class="block"
          :loading="false"
          :finished="true"
          loading-text=""
          finished-text=""
        >
          <van-cell
            v-for="(item, key) in menu"
            :key="key"
            :title="item.name"
            @click.stop="change(key)"
          />
        </van-list>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Overlay, List } from 'vant'
export default {
  name: 'SidebarOne',
  components: {
    [Overlay.name]: Overlay,
    [List.name]: List,
  },
  data() {
    return {
      menu: [
        {
          name: '主页',
          routerName: 'home',
        },
        {
          name: '查找',
          routerName: 'search',
        },
        {
          name: '联系人',
          routerName: 'friends',
        },
        {
          name: '设置',
          routerName: 'setting',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      sideBar: state => state.Menu.sideBar,
    }),
  },
  methods: {
    ...mapMutations(['changeSideBar', 'changeActive']),
    closeSideBar() {
      this.changeSideBar(false)
    },
    change(active) {
      this.$router.replace({ name: this.menu[active].routerName })
      this.changeSideBar(false)
      this.changeActive(active)
    },
  },
}
</script>

<style lang="less">
.my-overlay {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    .van-cell {
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      width: 280px;
      font-size: 18px;
      line-height: 36px;
    }
    .van-cell::after {
      border-bottom: 3px solid #fff;
    }
  }
  .footer-close {
    font-size: 30px;
    padding: 10px;
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>
