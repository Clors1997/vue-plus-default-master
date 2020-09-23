<template>
  <div id="down">
    <van-button
      :class="start_flag !== 0 ? 'down-start' : 'down-start down-start2'"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      @click="startOrCount"
    >
      <van-count-down
        ref="countDown"
        class="down-count"
        millisecond
        :time="5000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finish"
      />
      <span v-show="start_flag !== 0" class="count">{{ count }}</span>
    </van-button>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { CountDown } from 'vant'
export default {
  name: 'Dowm',
  components: {
    [CountDown.name]: CountDown,
  },
  data() {
    return {
      start_flag: 0,
      count: 0,
    }
  },
  mounted() {
    this.animation1 = anime({
      targets: '.down-start',
      width: '100%',
      height: '100%',
      borderRadius: ['50%', '0%'],
      duration: 1000,
      autoplay: false,
      easing: 'easeInOutExpo',
    })
    this.animation2 = anime({
      targets: '.down-count',
      scale: 3,
      color: '#fff',
      translateY: -50,
      duration: 1000,
      autoplay: false,
      easing: 'easeInOutExpo',
    })
    this.animation3 = anime({
      targets: '.count',
      color: '#fff',
      duration: 1000,
      autoplay: false,
      easing: 'easeInOutExpo',
    })
  },
  methods: {
    startOrCount() {
      switch (this.start_flag) {
        case 0:
          this.start_flag = 1
          this.$refs.countDown.start()
          this.animation1.play()
          this.animation2.play()
          this.animation3.play()
          break
        case 1:
          this.count++
          break
        default:
          this.$toast('倒计时结束')
          break
      }
    },
    finish() {
      this.start_flag = 2
      this.$toast('倒计时结束')
    },
  },
}
</script>

<style lang="less">
#down {
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  .down-start {
    font-size: 20px;
    font-weight: bold;
    align-self: center;
  }
  .down-start2 {
    width: 150px !important;
    height: 150px !important;
    border-radius: 50% !important;
  }
  .count {
    font-size: 60px;
    color: rgb(50, 50, 51);
  }
}
</style>
