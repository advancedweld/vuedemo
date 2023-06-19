import axios from 'axios'

const IS_PROD = import.meta.env.VITE_ENV === 'production'
// axios 默认配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers['x-client'] = process.env.xClient
// axios.defaults.headers['x-client-version'] = process.env.xClientVersion
console.log('@@@@@@@环境变量', import.meta.env)
axios.defaults.headers['x-client'] = import.meta.env.VITE_ENV
axios.defaults.headers['x-client-version'] = import.meta.env.VITE_ENV

// axios.defaults.timeout = 30000 // 设置30s为超时

// 存储路由跳转时，需要cancel的接口
const requestMap = new Map()
const instance = axios.create({
  timeout: 10000,
  baseURL: IS_PROD ? 'http://localhost:3000' : '/api'
  // proxy: {
  //   host: 'localhost',
  //   port: 3306
  // }
})

/**
 * 请求拦截
 */
instance.interceptors.request.use((config: any) => {
  if (config.cancelToken) {
    const source = axios.CancelToken.source()
    config.axiosKey = config.url.split('?')[0]
    config.cancelToken = source.token
    // 如果存在就未完结的就cancel
    if (requestMap.has(config.axiosKey)) {
      requestMap.get(config.axiosKey).cancel()
    }
    requestMap.set(config.axiosKey, source)
  }
  return config
})

/**
 * 结果拦截
 */
instance.interceptors.response.use((response: any) => {
  const {
    config: { axiosKey }
  } = response
  requestMap.delete(axiosKey)
  return response
})

export default instance
