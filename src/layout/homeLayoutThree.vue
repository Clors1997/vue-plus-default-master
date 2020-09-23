<template>
  <div class="home-layout">
    <header-three />
    <router-view class="home-router" />
  </div>
</template>

<script>
export default {
  name: 'HomeLayout',
}
</script>

<style lang="less" scoped>
.home-router {
  width: 100%;
  overflow-y: auto;
}
.home-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
