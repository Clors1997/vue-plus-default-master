<template>
  <div class="setting">
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import F2 from '@antv/f2'
export default {
  name: 'Setting',
  data() {
    return {
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ],
    }
  },
  mounted() {
    const chart = new F2.Chart({
      id: 'myChart',
      pixelRatio: window.devicePixelRatio,
    })
    chart.source(this.data)
    chart
      .interval()
      .position('genre*sold')
      .color('genre')

    // Step 4: 渲染图表
    chart.render()
  },
  methods: {},
}
</script>

<style scoped lang="less">
.setting {
  height: 100%;
  display: flex;
  place-content: center;
  #myChart {
    width: 300px !important;
    height: 200px !important;
  }
}
</style>
