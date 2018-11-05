<template>
  <div id="app">
    <m-tabbar></m-tabbar>
    <router-view></router-view>
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
