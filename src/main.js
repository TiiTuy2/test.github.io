// main.js or main.ts

import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/index'; // Adjust the path if necessary
import './style.css';
import '../src/index.css'; // Adjust the path if necessary

const app = createApp(App);
app.use(router);
app.mount('#app');

