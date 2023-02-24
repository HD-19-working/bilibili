import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store/pinia'

import LazyLoad from './utils/lazyLoading'
import preLoad from './utils/preLoading';
import "./assets/css/default.css"

preLoad([
  require("@/static/img/default_img_big.jpg"),
  require("@/static/img/default_img_middle.jpg"),
  require("@/static/img/default_img_small.jpg")
]).finally(()=>{
  createApp(App)
  .use(LazyLoad)
  .use(pinia)
  .mount('#app')
});

