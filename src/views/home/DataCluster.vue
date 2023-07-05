<template>
  <div class="index">
    <SessionContainer :title="'数据集群'">
      <template #title>
        <div class="title">
          <div v-for="(item, index) in titles" :key="index">
            <div>{{ item }}</div>
            <div>核心数据库</div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="card-wrap">
          <Card v-for="(item, index) in cards" :key="index" />
        </div>
      </template>
    </SessionContainer>
  </div>
</template>
<script lang="ts" setup name="">
import { onMounted, onUnmounted, ref } from 'vue'
import SessionContainer from './com/SessionContainer.vue'
import Card from './com/Card.vue'

const titles = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6']
const cards = [1, 2, 3, 4, 5, 6, 7]
</script>
<style lang="less" scoped>
.card-wrap {
  display: flex;
  flex-wrap: wrap;

  // justify-content: space-between;
}
.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 50px;
  text-align: center;
  border: 1px solid red;
}
</style>
