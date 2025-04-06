import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PieChart from './components/PieChart.vue';
import BarChart from './components/BarChart.vue';


const routes = [
  { path: '/pie-chart', component: PieChart },
  { path: '/bar-chart', component: BarChart },
  { path: '/', redirect: '/pie-chart' }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
