<template>
  <div class="header" :class="{ header_show: headerShow, shadow: headerShowActive }">
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <img :src="logo_img[0].path" alt="logo" v-if="headerLogoShow" />
            <img :src="logo_img[1].path" alt="logo" v-else />
          </router-link>
        </div>
        <div class="menu-wrapper">
          <div class="menu-item" v-for="(nav, index) in navList" :key="index">
            <h2 class="menu-item-link">
              <router-link :to="nav.path">
                <span :class="{ a_text_dark: navDarkActive }">
                  {{ nav.title }}
                </span>
              </router-link>
            </h2>
          </div>
        </div>
        <div class="profile-wrapper">
          <!-- <el-dropdown v-if="userProfileStore.isLogin" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <img
                class="avatar"
                src="https://avatars.githubusercontent.com/u/21203766?v=4"
                alt="头像"
              />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu>
              <el-dropdown-item command="userProfile">个人中心</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <el-button v-if="userProfileStore.isLogin" @click="loginOutUser">登出</el-button>
          <el-button v-else @click="loginUser">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="AwHeader">
import { computed, onBeforeMount, onMounted, ref, toRefs } from 'vue'
import logoUrl from '@assets/img/index/logo.png'
import logoColorUrl from '@assets/img/index/logoColor.png'

import { useUserProfileStore } from '@/store/userProfile'
type NavItem = {
  title: string
  path: string
}
type ImgItem = {
  path: string
}

const userProfileStore = useUserProfileStore()

console.log('🚀 ~ file: Header.vue:66 ~ userProfile:', userProfileStore.isLogin)

const navList = ref<NavItem[]>([])
const logo_img = ref<ImgItem[]>([])
// const store = useStore<MainStates>()

const loginUser = async () => {
  userProfileStore.login()
}
const loginOutUser = async () => {
  userProfileStore.loginOut()
}
const handleCommand = (command: any) => {
  console.log('@@@@@handleCommand', command)
}
const headerShowActive = false
const headerShow = false
const headerLogoShow = false
const navDarkActive = false

logo_img.value = [
  {
    // path: require('../../assets/img/index/logo.png'),
    path: logoUrl
  },
  {
    path: logoColorUrl
  }
]

onBeforeMount(() => {
  navList.value = [
    {
      title: '首页',
      path: '/index'
    },
    {
      title: '新闻中心',
      path: '/news'
    },
    {
      title: '产品与服务',
      path: '/product'
    },
    // {
    //   title: '人才招聘',
    //   path: '/job'
    // },
    // {
    //   title: '客户服务',
    //   path: '/customer'
    // },
    // {
    //   title: '登录',
    //   path: '/login'
    // },
    {
      title: '关于',
      path: '/about'
    }
  ]
})
</script>
<style lang="less" scoped>
@nav_active_color: #3370ff;

h2 {
  margin: 0;
}

.header_show {
  transform: translateY(-62px);
}

.a_text_dark {
  color: rgba(0, 0, 0, 0.8);
}

.header {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  //backdrop-filter: blur(0);
  box-shadow: none;

  position: fixed;
  z-index: 999;
  transition: transform 0.2s ease;

  //color: rgba(255, 255, 255, 1) !important;
  //transition: all 0.3s ease;
  .header_container {
    height: 100%;
  }
}

.shadow {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}

.header_content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding: 0 96px;
  margin: 0 auto;

  .logo {
    flex: 0 0 auto;

    img {
      height: 35px;
    }
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}

.menu-wrapper {
  display: flex;
  flex-direction: row;
  list-style: none;
  -ms-flex-align: center;
  align-items: center;
  padding: 0;
  margin: 0 0 0 20px;
  position: relative;

  .menu-item {
    flex-shrink: 0;
  }

  .menu-item:last-child:before {
    content: '';
    display: block;
    height: 12px;
    border-right: 1px solid #bbbfc4;
    //border-right: 1px solid #fff;
    position: absolute;
    bottom: 24px;
    right: 48px;
  }

  > .menu-item + .menu-item {
    margin-left: 40px;
  }

  .menu-item-link {
    //color: #646a73;
    font-weight: 400;
    font-size: 14px;
    line-height: 60px;
    cursor: pointer;
    position: relative;

    a {
      display: inline-block;
      color: rgba(255, 255, 255, 1);
      transition: color 0.3s;

      :hover {
        color: @nav_active_color;
      }
    }

    .router-link-exact-active {
      color: @nav_active_color;
      font-weight: 600;

      span:after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        width: 26px;
        left: calc(50% - 13px);
        bottom: 14px;
        background-color: @nav_active_color;
      }
    }
  }
}

.profile-wrapper {
  border: 1px solid red;
  display: flex;
}
.nav_text_white {
  color: rgba(255, 255, 255, 1);
}

.nav_text_dark {
  color: rgba(0, 0, 0, 0.8);
}

@media only screen and (max-width: 991px) {
  .header_content {
    padding: 0 32px;
  }
}
</style>
