<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import mainStore from '@/store'

function fetchData() {
  console.log('@@@@@@fetchData')
  alert('登录')
}

onMounted(() => {
  console.log('@@@@@@about  onMounted--aa-')

  mainStore.commit('setHeaderLogo', {
    headerLogoShow: false,
  })
  mainStore.commit('setShadowActive', {
    headerShadowActive: false,
  })
  mainStore.commit('setNavDarkActive', {
    navDarkActive: true,
  })
  mainStore.commit('setHeaderShow', {
    headerShow: false,
  })
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="fetchData">请求数据</el-button>
  </div>
</template>
