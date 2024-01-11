import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ELIcons from '@element-plus/icons'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import request from "./utils/request";
import storage from "./utils/storage";
import 'element-ui/lib/theme-chalk/index.css';
import * as L from "leaflet";
import * as echarts from 'echarts';
import "leaflet/dist/leaflet.css";

console.log(process.env)

const app = createApp(App)
// 全局挂载
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
app.config.globalProperties.$L=L;
app.config.globalProperties.$echarts=echarts;


/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


for (const icon in ELIcons) {   
    app.component(icon, ELIcons[icon]);
}
app
    .use(ElementPlus, {locale})
    .use(router)
    .mount('#app')
