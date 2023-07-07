<template>
  <div>
    <el-button @click="showLoginDialog">登录</el-button>
    <el-dialog v-model="dialogVisible" title="登录" append-to-body>
      <el-form :model="form" ref="ruleFormRef" :rules="formRules">
        <el-form-item label="用户名" label-width="80" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password" label-width="80">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="描 述" prop="desc" label-width="80">
          <el-input type="text" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置表单</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useUserProfileStore } from '@/store/userProfile'

type FormValues = {
  name: string
  password: string
  desc: string
}
const ACCOUNT = 'admin'
const PASSWORD = '123456'

const userProfileStore = useUserProfileStore()
const ruleFormRef = ref<FormInstance | null>(null)
const dialogVisible = ref(false)

const formRules: FormRules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
  ]
}
const form: FormValues = reactive({
  name: ACCOUNT,
  password: PASSWORD,
  desc: 'this is a description'
})
const showLoginDialog = () => {
  dialogVisible.value = true
}

const checkLogin = (form: FormValues) => {
  // 处理登录逻辑
  if (form.name === ACCOUNT && form.password === PASSWORD) {
    ElMessage.success('登录成功')
    userProfileStore.login()
    dialogVisible.value = false
    return true
  }
  ElMessage.error('用户名或密码错误')
  return false
}
const onSubmit = async (formEl: FormInstance | null) => {
  // 处理登录逻辑
  console.log('@@@@登录', form)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      checkLogin(form)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | null) => {
  console.log('@@@@重置表单', formEl?.resetFields)

  if (!formEl) return
  // formEl.resetFields()
  Object.assign(form, {
    name: '',
    password: '',
    desc: 'new description'
  })
}
</script>
