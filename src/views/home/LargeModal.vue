<template>
  <div class="index">
    <SessionContainer :title="'领域大模型'">
      <template #title>
        <div class="subtitle">
          <span>多模态/跨行业的创新设计领域大模型</span>
        </div>
      </template>
      <template #content>
        <div style="text-align: center">
          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
            <el-radio-button label="left">时尚领域大模型</el-radio-button>
            <el-radio-button label="right">新零售领域大模型</el-radio-button>
          </el-radio-group>
        </div>

        <Carousel />
      </template>
    </SessionContainer>
  </div>
</template>
<script lang="ts" setup name="">
import { onMounted, onUnmounted, ref } from 'vue'
import SessionContainer from './com/SessionContainer.vue'

import Carousel from './com/Carousel.vue'

const tabPosition = ref('left')
</script>
<style lang="less" scoped>
.card-wrap {
  display: flex;
  flex-wrap: wrap;
}
.subtitle {
  margin: 10px 50px;
  text-align: center;
  border: 1px solid red;
}
</style>
