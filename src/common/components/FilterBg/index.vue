<template>
  <div>
    <img src="static/images/bg.jpg" alt="" class="filter-bg">
  </div>
</template>

<script>
export default {
  name: 'FilterBg'
}
</script>

<style lang="stylus" scoped>
  .filter-bg
    position absolute
    width 100%
    height 100%
    filter: blur(15px)
</style>
