import { RouteConfig } from 'vue-router';
const About = () => import('./pages/About.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

export default routes;
