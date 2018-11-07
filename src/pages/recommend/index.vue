<template>
  <div class="recommend-page">
    <filter-bg></filter-bg>
    <scroll class="recommend-content" :data="list" ref="scroll">
      <div>
        <slider v-if="recommends.length">
          <a :href="item.linkUrl" v-for="item in recommends" :key="item.id">
            <img :src="item.picUrl" alt="" @load="_isLoaded">
          </a>
        </slider>
        <div class="list-content">
          <text-title text="热门歌单推荐" class="text-title"></text-title>
          <div class="disList-content" v-if="list.length">
            <list-item v-for="item in list" :key="item.dissid" :imgUrl="item.imgurl" :desc="item.dissname"></list-item>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import FilterBg from 'components/FilterBg'
import Slider from 'components/Slider'
import TextTitle from 'components/TextTitle'
import ListItem from './components/ListItem'
import Scroll from 'components/Scroll'
import {getRecommend, getDisplayList} from 'api/recommend'
import {ERR_OK} from 'common/js/config'

export default {
  name: 'recommend',
  components: {
    FilterBg,
    Slider,
    TextTitle,
    ListItem,
    Scroll
  },
  data () {
    return {
      recommends: [],
      list: [],
      checkLoaded: false
    }
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      }, (err) => {
        console.log(err)
      })
    },
    _getDisplayList () {
      getDisplayList().then((res) => {
        if (res.code === ERR_OK) {
          this.list = res.data.list
        }
      })
    },
    _isLoaded () {
      if (!this.checkLoaded) {
        this.$refs.scroll._refresh()
        this.checkLoaded = true
      }
    }
  },
  created () {
    this._getRecommend()
    this._getDisplayList()
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-page
    position absolute
    top .88rem
    left 0
    right 0
    bottom 0
    .recommend-content
      position relative
      height 100%
      .list-content
        padding 0 .2rem
        box-sizing border-box
        .text-title
          margin .2rem 0
        .disList-content
          display flex
          flex-wrap wrap
          justify-content space-between
</style>
