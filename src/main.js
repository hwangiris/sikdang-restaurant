import { createApp } from 'vue';

// Airbnb規則：外部套件往上放
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

import emitter from '@/script/mitt';
import Nav from '@/components/NavComponent.vue';

// Airbnb規則：再執行本地檔案
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.use(router);
app.use(VueAxios, axios);
app.component('NavComponent', Nav);
app.mount('#app');
