<template>
  <div class="header-three">
    <van-nav-bar fixed :border="false" @click-left="back">
      <template #title>
        <transition name="van-slide-right">
          <van-search
            v-if="searchFlag"
            v-model="searchValue"
            style="width: 75vw;"
            :clearable="false"
            placeholder="请输入搜索关键词"
            @search="onSearch"
          />
        </transition>
        <span v-if="titleFlag.value">标题</span>
      </template>
      <template #left>
        <van-icon class="header-icon" name="arrow-left" />
      </template>
      <template #right>
        <van-icon
          v-if="searchFlag"
          class="header-icon"
          name="close"
          @click="changeSearchFlag"
        />
        <van-icon
          v-else
          class="header-icon"
          name="search"
          @click="changeSearchFlag"
        />
      </template>
    </van-nav-bar>
    <div class="header-bg"></div>
  </div>
</template>

<script>
import { NavBar, Search } from 'vant'
export default {
  name: 'HeaderThree',
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search,
  },
  data() {
    return {
      searchFlag: false,
      searchValue: '',
      titleFlag: {
        titleFlagStruct: null,
        value: true,
      },
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    onSearch(val) {
      console.log(val)
    },
    onCancel() {
      this.searchValue = ''
      this.searchFlag = false
    },
    changeSearchFlag() {
      this.searchFlag = !this.searchFlag
      if (this.searchFlag) {
        this.titleFlag.value = false
        if (this.titleFlag.titleFlagStruct !== null) {
          clearTimeout(this.titleFlag.titleFlagStruct)
        }
      } else {
        this.titleFlag.titleFlagStruct = setTimeout(() => {
          this.titleFlag.titleFlagStruct = null
          this.titleFlag.value = true
        }, 500)
      }
    },
  },
}
</script>

<style lang="less">
.header-three {
  .van-nav-bar {
    background-color: rgba(0, 0, 0, 0);
  }
  .van-nav-bar__title {
    max-width: 90% !important;
    color: #fff;
  }
  .header-icon {
    font-size: 20px;
    color: #fff;
  }
  .van-search {
    background-color: rgba(0, 0, 0, 0);
    padding-right: 0px;
  }
  .header-bg {
    width: 100%;
    height: 46px;
    background: url('https://static.geekbang.org/infoq/5a324883e4ca1.png?imageView2/0/')
      no-repeat;
  }
}
</style>
