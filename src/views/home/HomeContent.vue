<template>
  <div class="home-wrap">
    <DataCluster />
    <LargeModal />
  </div>
</template>
<script lang="ts" setup name="">
import { onBeforeMount, onMounted, ref } from 'vue'
import DataCluster from './DataCluster.vue'
import LargeModal from './LargeModal.vue'

onMounted(() => {
  console.log('@@@@@@homecontent loaded')
})
</script>

<style lang="less" scoped>
.home-wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid red;
}
</style>
