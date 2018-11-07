<template>
  <div class="slider">
    <div class="slider-content" ref="sliderContent">
      <div class="slider-group" ref="sliderGroup">
        <slot></slot>
      </div>
      <div class="dot-group">
        <span class="dot" v-for="(item, index) in dots" :key="index" :class="{active: index === currentIndex}"></span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      dots: [],
      currentIndex: 0
    }
  },
  methods: {
    _setSliderWidth (isResize) {
      let width = 0
      let sliderWidth = this.$refs.sliderContent.clientWidth
      this.children = this.$refs.sliderGroup.children

      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.classList.add('slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }

      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.sliderContent, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })

      this.slider.on('scrollEnd', () => {
        this.currentIndex = this.slider.getCurrentPage().pageX
        this._play()
      })
    },
    _play () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slider.next()
      }, this.interval)
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    }
  },
  mounted () {
    this._setSliderWidth()
    this._initDots()
    this._initSlider()

    if (this.autoPlay) {
      this._play()
    }

    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="stylus" scoped>
  .slider
    position relative
    width 100%
    overflow hidden
    .slider-group
      height 3rem
    .slider-item
      display inline-block
      height 100%
      img
        width 100%
        height 100%
    .dot-group
      position absolute
      left 0
      right 0
      bottom .3rem
      display flex
      justify-content center
      .dot
        display inline-block
        width .1rem
        height .1rem
        background rgba(255,255,255,.5)
        border-radius .05rem
        margin .05rem
        &.active
          width .2rem
          background #fff
</style>
