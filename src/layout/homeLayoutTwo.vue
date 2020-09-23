<template>
  <div class="home-layout">
    <header-two />
    <sidebar-one />
    <router-view class="home-router" />
    <footer-one />
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
  margin-bottom: 13.333vw;
}
.home-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
