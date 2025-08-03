import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';

const app = createApp(App);
app.use(router);
app.use(globalDirectives);
app.use(dayjs);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log(import.meta.env.VITE_APP_API_URL);
