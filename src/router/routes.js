function load (component) {
  return resolve => require([`../views/${component}`], resolve);
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: load('Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/user/login',
    name: 'login',
    component: load('user/login'),
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/search/index',
    name: 'search',
    component: load('search/search'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/goods/list',
    component: load('goods/list'),
    name: 'goodsList',
    meta: {
      title: '商品列表'
    }
  },
  {
    path: '*',
    redirect: {
      path: '/'
    }
  }
];
export default routes;
