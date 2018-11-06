<template>
  <div class="recommend-page">
    <filter-bg></filter-bg>
    <div class="recommend-content">
      <div class="recommend-slider">
        <slider v-if="recommends.length">
          <a :href="item.linkUrl" v-for="item in recommends" :key="item.id">
            <img :src="item.picUrl" alt="">
          </a>
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBg from 'components/FilterBg'
import Slider from 'components/Slider'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'common/js/config'

export default {
  name: 'recommend',
  components: {
    FilterBg,
    Slider
  },
  data () {
    return {
      recommends: []
    }
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.recommends = res.data.slider
        }
      }, (err) => {
        console.log(err)
      })
    }
  },
  created () {
    this._getRecommend()
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
