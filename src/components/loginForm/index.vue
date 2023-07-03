<template>
  <div>
    <el-button @click="showLoginDialog">登录</el-button>
    <el-dialog v-model="dialogVisible" title="登录">
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密 码" width="200px">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
      <el-space>
        <span>{{ `账号：${ACCOUNT}` }}</span>
        <span>{{ `密码：${PASSWORD}` }}</span>
      </el-space>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserProfileStore } from '@/store/userProfile'

const ACCOUNT = 'admin'
const PASSWORD = '123456'
const userProfileStore = useUserProfileStore()

const dialogVisible = ref(false)
const username = ref<string>('')
const password = ref<string>('')

const loginUser = async () => {
  userProfileStore.login()
}
const showLoginDialog = () => {
  dialogVisible.value = true
}

const checkLogin = (userName, pwd) => {
  // 处理登录逻辑
  if (userName.value === ACCOUNT && pwd.value === PASSWORD) {
    return true
  }
  return false
}
const login = () => {
  // 处理登录逻辑
  console.log('@@@@登录', username, password)
  if (checkLogin(username, password)) {
    loginUser()
    ElMessage.success('登录成功')
    dialogVisible.value = false
  } else {
    ElMessage.error('用户名或密码错误')
  }
}
</script>
