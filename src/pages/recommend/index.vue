<template>
  <div class="recommend-page">
    <filter-bg></filter-bg>
    <div class="recommend-content">
      推荐
    </div>
  </div>
</template>

<script>
import FilterBg from 'components/FilterBg'

export default {
  name: 'recommend',
  components: {
    FilterBg
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-page
    position: absolute;
    top: .88rem;
    left: 0;
    right: 0;
    bottom: 0;
    .recommend-content
      position relative
</style>
