// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import jquery from 'jquery'
import VueCookie from 'vue-cookie'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueCookie)
Vue.use(VueMasonry)

window.Vue = require('vue')
window.axios = axios
window.$ = jquery

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

Vue.prototype.$initUrl = window.location.protocol + '//' + window.location.host
Vue.prototype.$baseUrl = 'http://localhost/buletin_boards/public'

Vue.prototype.$goBack = function () {
  if (window.history.length > 1) {
    this.$router.back()
  } else {
    this.$router.push('/')
  }
}

// logout
Vue.prototype.$logOut = function () {
  var a = confirm('Logout from your account?')
  if (a) {
    var vm = this
    // this.$openMessageYesNo('Logout from your account?', function () {
    // axios.get(vm.baseUrl+'/api/auth/logout?token='+vm.$cookie.get('jwt'))
    // .then(response => {
    //    if (response.data.status == "success") {
    //        vm.$cookie.delete('jwt')
    //        vm.$cookie.delete('id')
    //        vm.$cookie.delete('name')
    //        vm.$cookie.delete('username')
    //        vm.$cookie.delete('foto')
    //        window.location = vm.initUrl+'/welcome'
    //    } else {
    //        //vm.$openMessageBottom('open', 'logout failed')
    //    }
    // })
    // .catch(e => {
    //    if (e.response.data.error == 'token_expired') {
    //        //hard reset
    //    }
    //    //console.log(e.response)
    //    vm.$cookie.delete('jwt')
    //    vm.$cookie.delete('id')
    //    vm.$cookie.delete('name')
    //    vm.$cookie.delete('username')
    //    vm.$cookie.delete('foto')
    //    window.location = vm.initUrl+'/welcome'
    // })
    // })
    vm.$cookie.delete('jwt')
    vm.$cookie.delete('id')
    vm.$cookie.delete('name')
    vm.$cookie.delete('username')
    vm.$cookie.delete('foto')
    window.location = vm.$initUrl
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
