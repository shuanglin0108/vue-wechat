/**/
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routeConfig from './router';

//加载路由中间件
Vue.use(VueRouter);
Vue.use(VueResource);

//定义路由
const router = new VueRouter({
  mode:'history',//切换路径模式，变成history模式,不然路径为/#/home
  scrollBehavior:()=>({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    y:0
  }),
  // 注意这里的名称
  routes: routeConfig
})

const app = new Vue({
  VueRouter,
  VueResource,
  router,
  render: h => h(App)
}).$mount('#app');
