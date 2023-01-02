import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";
import { createI18n } from "vue-i18n";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
});

app.use(router);
app.use(i18n);

app.mount("#app");
