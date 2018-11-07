<template>
  <div class="scroll-wrapper" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      Type: Number,
      default: 1
    },
    click: {
      Type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    _initScroll () {
      if (!this.$refs.scroll) {
        return
      }
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        click: this.click
      })
    },
    _refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  watch: {
    data () {
      setTimeout(() => {
        this._refresh()
      }, 20)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
