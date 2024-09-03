import { createApp } from "vue";
// import "./style.css";
import "./assets/main.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import i18n from "./common/configurations/vi18n.config";

const pinia = createPinia();
const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");
