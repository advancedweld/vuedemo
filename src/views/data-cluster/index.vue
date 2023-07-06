<template>
  <div class="content-wrap">
    <AwHeader :isShow="false" :activeTab="'home'"></AwHeader>
    <Banner />

    <AwFooter></AwFooter>
  </div>
</template>
<script lang="ts" setup name="">
import { onMounted, onUnmounted, ref } from 'vue'

import AwHeader from '@com/public/Header.vue'
import AwFooter from '@/components/public/Footer.vue'
import Banner from './com/Banner.vue'

onMounted(() => {})

onUnmounted(() => {})
</script>
<style lang="less" scoped>
.content-wrap {
  position: relative;
  padding-top: 60px;
  .img-container {
    height: 200px;
    border: 1px solid red;
    position: relative;
  }
  .title {
    text-align: center;
  }
}
</style>
