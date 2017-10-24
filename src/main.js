//import Login from './views/login/Login'
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false;


Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
	routes,
  //strict: process.env.NODE_ENV !== 'production',
  mode: 'history'
})

new Vue({
  components: {App},
  template: '<App/>',
  router,
  store
}).$mount("#app")
