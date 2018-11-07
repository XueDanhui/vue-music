<template>
  <div class="title-comp">
    <div class="text-title">
      <span class="line"></span>
      <span class="text">{{text}}</span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['text']
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'

  .text-title
    display flex
    justify-content space-between
    align-items center
    width 100%
    box-sizing border-box
    padding 0 .4rem
    .text
      line-height $font-size-medium
      color $color-theme
      font-size $font-size-medium
      margin 0 .4rem
    .line
      height 1px
      background-color $color-theme-d
      flex-grow 1
</style>
