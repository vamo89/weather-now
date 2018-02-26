// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'

import App from './App'
import './assets/css/reset.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueMoment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
