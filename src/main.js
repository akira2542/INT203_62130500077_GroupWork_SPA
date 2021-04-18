import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './mixins/api'
import base from './plugins/base'

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .mixin(api)
  .use(base)
  .mount('#app')
