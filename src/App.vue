<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation> <router-view class="router" /> </navigation>
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      transitionName: 'slide-right',
    }
  },
  computed: {
    ...mapGetters(['hasCache']),
  },
  beforeCreate() {
    console.log(this.$route)
    /* IF_TRUE_APP */
    let that = this
    this.$plus(function() {
      let webview = window.plus.webview.currentWebview()
      let first = null
      window.plus.key.addEventListener('backbutton', function() {
        if (that.hasCache) {
          that.clearCache()
        } else {
          webview.canBack(function(e) {
            that.$toast('111')
            if (e.canBack) {
              webview.back()
            } else {
              if (!first) {
                first = new Date().getTime()
                that.$toast('再按一次退出')
                setTimeout(function() {
                  first = null
                }, 1000)
              } else {
                if (new Date().getTime() - first < 1500) {
                  window.plus.runtime.quit()
                }
              }
            }
          })
        }
      })
    })
    /* END_TRUE_APP */
  },
  created() {
    this.$navigation.on('forward', (to, from) => {
      console.log(to, from)
      if (to.route.meta.transitionName != undefined) {
        this.transitionName = to.route.meta.transitionName
      } else {
        this.transitionName = 'slide-right'
      }
    })
    this.$navigation.on('replace', (to, from) => {
      console.log(to, from)
      this.transitionName = 'none'
    })
    this.$navigation.on('back', (to, from) => {
      console.log(to, from)
      console.log(from.route.meta.transitionName)
      if (from.route.meta.transitionName != undefined) {
        this.transitionName = from.route.meta.transitionName
      } else {
        this.transitionName = 'slide-left'
      }
    })
  },
  methods: {
    ...mapMutations(['clearCache']),
  },
}
</script>

<style lang="less">
#app {
  font-family: PingFangSC-Regular;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/** 解决路由切换动画上下闪动问题 */
.router {
  position: absolute;
  top: env(safe-area-inset-top);
  width: 100%;
  transition: all 0.377s ease;
  backface-visibility: hidden;
}
.none-enter-active,
.none-leave-active {
  transition: none 0s;
}
.lazy-enter-active {
  will-change: opacity;
  transition-delay: 0.9s;
  transition: all 0.3s;
}
.lazy-enter {
  opacity: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.3s;
  position: absolute;
  width: 100%;
  left: 0;
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-active {
  transform: translateX(100%);
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-active {
  transform: translateX(-100%);
}
</style>
