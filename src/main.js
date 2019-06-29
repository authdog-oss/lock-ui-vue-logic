import Vue from 'vue'
import Lock from './Lock.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Lock),
}).$mount('#app')
