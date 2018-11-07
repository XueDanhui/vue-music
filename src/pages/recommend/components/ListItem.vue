<template>
  <div class="listItem-comp">
    <div class="list-item">
      <img :src="imgUrl" alt="" class="item-img" :onerror="defaultImg">
      <span class="item-desc">{{desc}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    imgUrl: String,
    desc: String
  },
  data () {
    return {
      defaultImg: 'this.src="' + require('static/images/default.jpg') + '"'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'

  .listItem-comp
    width 49%
    .list-item
      position relative
      width 100%
      height 2.35rem
      margin-bottom .1rem
      .item-img
        width 100%
        height 100%
      .item-desc
        display inline-block
        width 100%
        position absolute
        left 0
        bottom 0
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        line-height $font-size-large
        font-size $font-size-small
        background rgba(0,0,0,0.5)
        padding 0 .1rem
        box-sizing border-box
</style>
