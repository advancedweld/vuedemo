<template>
  <div class="container-wrap">
    <div class="title">{{ props.title }}</div>

    <el-divider></el-divider>
    <div><slot name="title"></slot></div>
    <div class="content"><slot name="content"></slot></div>
  </div>
</template>
<script lang="ts" setup name="">
import { onBeforeMount, onMounted, ref } from 'vue'
type TitleProps = {
  title: string
}
/* 定义props类型 */
const props = defineProps<TitleProps>()
</script>

<style lang="less" scoped>
.container-wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 16px;
  // border: 1px solid red;
  .title {
    font-size: 44px;
    font-weight: 800;
    text-align: center;
  }

  .content {
    border: 1px solid red;
  }
}
</style>
