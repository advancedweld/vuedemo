<template>
  <div class="content-wrap">
    <h1>404 not found!</h1>
  </div>
</template>
<script lang="ts" setup name="">
import { onMounted, onUnmounted, ref } from 'vue'

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
