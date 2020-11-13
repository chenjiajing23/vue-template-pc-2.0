import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

// modules下面的路由
let routes: RouteConfig[] = [];

try {
  const context = require.context(`../modules`, true, /.*\/routes\.tsx?$/);
  context.keys().forEach((key: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(key);
    }
    const item = context(key).default;
    routes = routes.concat(item);
  });
} catch (err) {
  console.warn(err.message);
}

const routesList: Array<RouteConfig> = [
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
];

const router = new VueRouter({
  routes: [...routesList, ...routes]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next({ name: 'Home' });
  } else if (to.meta.requiresPhoneBinding) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

router.afterEach(() => {
  window.scrollTo(0, 0);
  setTimeout(() => {
    window.location.hash = window.location.hash.replace(/token=[^&]*&?/, '');
  }, 0);
});

export default router;
