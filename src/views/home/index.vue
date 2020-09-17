<template>
  <div class="home">
    <van-list>
      <van-cell
        title="点击使用confirm装饰器"
        value="还有更多装饰器哦"
        @click="$_handleUseDecorator"
      />
      <van-cell title="加载数据" @click="$_loadData" />
      <van-cell title="使用日期工具类" :value="`今天是${currentDate}`" />
    </van-list>
  </div>
</template>

<script>
import { List, NoticeBar, Cell, Notify } from 'vant'
import { confirm } from '@/decorator'
import { format, DATE_FMT } from '@/utils/date'

export default {
  name: 'Home',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [NoticeBar.name]: NoticeBar,
  },
  data() {
    return {
      currentDate: format(new Date(), DATE_FMT),
    }
  },
  created() {
    console.log('home create')
  },
  methods: {
    @confirm('这是通过装饰器添加的确认信息', '提示')
    $_handleUseDecorator() {
      console.log(`
		    你还可以使用
		    @alert 提示框
		    @throttle 函数节流
		    @debounce 函数防抖
		  `)
    },
    async $_loadData() {
      const loading = this.$loading()
      try {
        console.log(
          await this.$store.dispatch('apiFactory', {
            api_key: 'example/test',
            data: {
              test: '123456',
            },
          }),
        )
        Notify({
          message: '数据加载成功',
          type: 'success',
        })
      } catch (error) {
        console.error(error)
      } finally {
        loading.close()
      }
    },
  },
}
</script>
<style lang="less" scoped>
.home {
  font-size: 16px;
}
</style>
