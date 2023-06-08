<script setup lang="ts">
import { reactive, ref } from 'vue'

const CASE_MAP = {
  'V-IF': '条件渲染',
  'V-FOR': '循环渲染'
}
const state = reactive({ count: 0, fruit: ['apple', 'orange'] })

const showCase = ref('V-IF')
const showH = ref(true)
function increment() {
  state.count++
}

function changeFruit() {
  const [f0, f1] = state.fruit
  state.fruit[0] = f1
  state.fruit[1] = f0
}

function toggleshowCase() {
  const index = Math.floor(Math.random() * 2)
  console.log('@@@@key', index)
  const key = Object.keys(CASE_MAP)[index]
  console.log('@@@@key', key)
  showCase.value = key
}
</script>

<template>
  <div>
    <div class="about_">
      <h1>hello , design</h1>
      <h2>count:{{ state.count }}</h2>
      <h2>my favoriate food is {{ state.fruit[0] }}</h2>
    </div>
    <el-row>
      <el-button type="primary" @click="state.count--">count--</el-button>
      <el-button type="primary" @click="increment">count++</el-button>
      <el-button type="primary" @click="changeFruit">修改水果</el-button>
    </el-row>

    <el-button type="primary" @click="toggleshowCase">toggleRENDER</el-button>
    <div v-if="showCase === 'V-IF'">
      <h1>条件渲染</h1>
      <div>
        <h2 v-if="showH">h1 is show</h2>
        <h2 v-else>h1 is hidden</h2>
        <el-button @click="() => (showH = !showH)">toggle showH</el-button>
      </div>
    </div>

    <div v-if="showCase === 'V-FOR'">
      <h1>循环渲染</h1>
      <div>
        <h2 v-if="showH">h1 is show</h2>
        <h2 v-else>h1 is hidden</h2>
        <el-button @click="() => (showH = !showH)">toggle showH</el-button>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
  }
}
</style>
