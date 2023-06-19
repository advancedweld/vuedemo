<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import AwHeader from '@/components/public/Header.vue'
import mainStore from '@/store'
import { getAboutLit } from '@/apis/about'
async function fetchData() {
  console.log('@@@@@@fetchData')
  // console.log('@@@@@@fetchData', undefined.haswe)
  getAboutLit()
  // alert('登录')
}

onMounted(() => {
  console.log('@@@@@@about  onMounted--aa-')

  mainStore.commit('setHeaderLogo', {
    headerLogoShow: false
  })
  mainStore.commit('setShadowActive', {
    headerShadowActive: false
  })
  mainStore.commit('setNavDarkActive', {
    navDarkActive: true
  })
  mainStore.commit('setHeaderShow', {
    headerShow: false
  })
})
</script>

<template>
  <div class="news-container">
    <AwHeader class="news_header" ref="headRef"></AwHeader>
    <div class="news-content">
      <h1>This is an about page</h1>
      <el-button @click="fetchData">请求数据</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/style/variable.less';
.news_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  /* border-bottom: 1px solid #eff0f1; */
}

.news-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  /* background: #d3dce6; */
  min-height: 580px;
  margin: 0 auto;
}

.news-content {
  padding-top: 60px;
  width: 860px;

  h1 {
    font-size: 23px;
    line-height: 30px;
    padding: 20px 0 14px;
  }

  span {
    color: @regular-text-color;
    line-height: 18px;
  }
}

.article {
  margin-top: 5px;
  overflow: hidden;
}

.right {
  margin-left: 50px;
  margin-top: 80px;
}
</style>
