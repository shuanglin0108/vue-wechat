/**
 * Created by Administrator on 2017/3/20.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import lineModel from './components/lineModel/lineModel';

Vue.use(VueRouter);
Vue.use(VueResource);


//创建一个路由器实例
//并配置路由规则
const routers = [
  {
    path: '/lineModel',
    name: 'lineModel',
    component: lineModel
  }
  /*{
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Login
      }
    ]
  }*/


]

export default routers
