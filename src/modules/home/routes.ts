import { RouteConfig } from 'vue-router';
const Home = () => import('./pages/Home.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
];

export default routes;
