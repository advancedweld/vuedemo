<template>
  <div class="card-wrap">
    <div class="img-section"><img :src="service1" /></div>
    <div class="text-section">
      <div>文化构成库</div>
      <div>精选优秀文化构成数据</div>
      <el-link>查看详情</el-link>
    </div>
  </div>
</template>
<script lang="ts" setup name="">
import { onBeforeMount, onMounted, ref } from 'vue'
import service1 from '@/assets/img/index/service1.png'
</script>

<style lang="less" scoped>
.card-wrap {
  width: 200px;
  height: 300px;
  border: 1px solid red;
  margin: 20px 0 0 20px;
  transition: all 0.3s ease;

  .img-section {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .img-section img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
  .img-section img:hover {
    scale: 1.3;
  }
  .text-section {
    width: 100%;
    height: 100px;
    // background-color: green;
  }
}
.card-wrap:hover {
  transform: translatey(-8px);
}
</style>
