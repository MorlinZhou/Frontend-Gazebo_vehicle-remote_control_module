/**
 * axios 封装
 */
import axios from "axios";
import config from './../config'
import {ElMessage} from "element-plus";
//import storage from "@/utils/storage";

// 全局配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 300000,
})

/**
 * 请求函数
 * @param {*} options 请求配置
 */
function request(options) {
    const whiteList=['/game/start']
    options.method = options.method || 'get';
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    // 添加token
    console.log(options.url)
    // 判断使用mock接口还是真实后端接口
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi;
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
    }
    return service(options).catch(err => {
        ElMessage.error(err.toString());
    });
}

// 为request函数添加get/post等调用方法
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request;