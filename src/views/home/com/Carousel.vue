<!--
 * @Author: xiangshangzhi
 * @Date: 2023-07-05 10:31:33
 * @FilePath: \vuedemo\src\views\home\com\Carousel.vue
 * @Description: 卡片走马灯
-->

<template>
  <div class="carousel-wrap">
    <el-carousel
      :interval="3000"
      type="card"
      height="350px"
      arrow="never"
      indicator-position="none"
      autoplay
    >
      <el-carousel-item v-for="item in 6" :key="item">
        <Card />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts" setup name="">
import { onBeforeMount, onMounted, ref } from 'vue'
import Card from './Card.vue'
</script>

<style lang="less" scoped>
.carousel-wrap {
  width: 100%;
  background-color: #fff;
  border: 1px solid red;
  .card-wrap {
    margin: auto;
  }
}
</style>
