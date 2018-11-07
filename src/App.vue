<template>
  <div id="app">
    <m-tabbar></m-tabbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MTabbar from 'components/MTabbar'

export default {
  name: 'App',
  components: {
    MTabbar
  }
}
</script>

<style lang="stylus" scoped>

</style>
