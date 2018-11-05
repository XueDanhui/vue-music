<template>
  <div class="m-tabbar">
    <div class="tabbar-left">搜索</div>
    <ul class="tabbar-center">
      <router-link to="/recommend" tag="li" class="tabbar-item">推荐</router-link>
      <router-link to="/singer" tag="li" class="tabbar-item">歌手</router-link>
      <router-link to="/ranking" tag="li" class="tabbar-item">排行</router-link>
    </ul>
    <div class="tabbar-right">我的</div>
  </div>
</template>

<script>
export default {
  name: 'MTabbar'
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl';

  .m-tabbar
    position relative
    width 100%
    line-height .88rem
    background $color-background
    color $color-text
    .tabbar-center
      display flex
      justify-content center
      .tabbar-item
        position relative
        padding 0 .2rem
        font-size $font-size-medium
        color $color-theme-d
        transition: font-size 0.1s linear,color 0.1s linear
        &.router-link-active
          color $color-theme
          font-size $font-size-medium-x
    .tabbar-left,
    .tabbar-right
      position absolute
      top 0
      font-size $font-size-small
      padding 0 .2rem
    .tabbar-left
      left 0
    .tabbar-right
      right 0
</style>
