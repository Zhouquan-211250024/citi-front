import axios from 'axios'

// 创建axios实例
const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
})

// 请求拦截器
request.interceptors.request.use(
    (response) => {
        return response // 请求成功则返回response
    },
    (error) => { // 请求失败则显示错误状态
        alert("请求失败");
        console.log(error.message)
        return Promise.reject(error);
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => { // 请求失败则显示错误状态
        alert("响应失败");
        console.log(error.message)
        return Promise.reject(error);
    }
)

export default request
