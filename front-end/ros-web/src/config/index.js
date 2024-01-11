/**
 * 环境配置
 */
const env = process.env.NODE_ENV || 'prod';
const EnvConfig = {
    dev: {
        baseApi: "http://u4xxtz.natappfree.cc",
        mockApi: "https://www.fastmock.site/mock/fedd927de6636e97ec34c1c9a2f5bf17/rosweb"
    },
    test: {
        baseApi: "http://u4xxtz.natappfree.cc",
        mockApi: "https://www.fastmock.site/mock/fedd927de6636e97ec34c1c9a2f5bf17/rosweb"
    },
    prod: {
        baseApi: "http://u4xxtz.natappfree.cc",
        mockApi: "https://www.fastmock.site/mock/fedd927de6636e97ec34c1c9a2f5bf17/rosweb"
    }
}
export default {
    env,
    mock: false,
    namespace: 'ROS',
    ...EnvConfig[env]
}