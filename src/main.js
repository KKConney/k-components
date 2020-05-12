import Vue from 'vue'
import App from './App.vue'
import KUI from './components/index'
import router from './router'
import '@/assets/theme/default/index.scss'

Vue.config.productionTip = false

Vue.use(KUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
