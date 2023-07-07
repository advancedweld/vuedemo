<template>
  <div class="home-wrap">
    <AwHeader :class="index_header" :isShow="false" :activeTab="'home'"></AwHeader>
    <div class="banner-wrap">
      <Banner :banner-height="BannerHeight"></Banner>
      <!-- 覆盖的标题 -->
      <over-lay></over-lay>
      <!-- banner上向下的小箭头 -->
      <!-- <scroll-hint
        v-scroll-to="{ element: '.wrap-block', duration: 300, easing: 'ease', offset: 1 }"
      ></scroll-hint> -->
    </div>
    <HomeContent></HomeContent>
    <AwFooter></AwFooter>
  </div>
</template>
<script lang="ts" setup name="">
import { onMounted, onUnmounted, ref } from 'vue'

import AwHeader from '@com/public/Header.vue'
import AwFooter from '@/components/public/Footer.vue'
import OverLay from '@/components/OverLayText.vue'
import Banner from '@/components/Banner.vue'
import ScrollHint from '@/components/ScrollHint.vue'
import HomeContent from './HomeContent.vue'

import { getProductLit } from '@/apis/product'

const index_header = ref('home')
const BannerHeight = ref(0)

const scrollTop = ref(0)

onMounted(() => {
  window.addEventListener('resize', setBannerHeight)
  setBannerHeight()
  getProductLit()
})

onUnmounted(() => {
  window.removeEventListener('resize', setBannerHeight)
})

function setBannerHeight() {
  BannerHeight.value = window.innerHeight
}
</script>
<style lang="less" scoped>
.home-wrap {
  position: relative;
}
.banner-wrap {
  overflow: hidden;
  position: relative;
}
</style>
