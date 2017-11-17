/**
 * Created by Administrator on 2017/3/20.
 */
import Home from './components/home/home';
import byBus from './components/byBus/byBus';
import myCenter from './components/myCenter/myCenter';
import Login from './components/login/login';
import hotLine from './components/hotLine/hotLine';


//创建一个路由器实例
//并配置路由规则
export default [
  {
    path: '/home',
    component: Home,
    children: [
    {
      path: '/',
      component: hotLine
    }
  ]
  },
  {
    path: '/byBus',
    component: byBus,
  },
  {
    path: '/myCenter',
    component: myCenter,
    children: [
      {
        path: '/',
        component: Login
      }
    ]
  }
]
