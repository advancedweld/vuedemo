<template>
  <div class="wrap">
    <div class="text-container">
      <div class="title">数据集群</div>
      <div class="info">这里是文案说明文案说明文案文案收</div>
    </div>
  </div>
</template>
<script lang="ts" setup name="">
import { onMounted, onUnmounted, ref } from 'vue'

onMounted(() => {})

onUnmounted(() => {})
</script>
<style lang="less" scoped>
.wrap {
  height: 200px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../../assets/img/banner1.jpg');
  background-size: 100% 100%;
  // background-size: cover;
  .text-container {
    border: 1px solid red;
    width: 200px;
  }
  .title {
    color: blue;
    font-size: large;
    font-weight: 600;
  }
  .info {
    color: #666;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
