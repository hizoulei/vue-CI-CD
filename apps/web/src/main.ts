import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import '@vue-ci-cd/ui/styles.css';
import App from '@/App.vue';
import { appConfig } from '@/config/env';
import DashboardView from '@/views/DashboardView.vue';
import SettingsView from '@/views/SettingsView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: DashboardView },
    { path: '/settings', component: SettingsView },
  ],
});

createApp(App).use(createPinia()).use(router).mount('#app');
document.title = appConfig.appName;
