import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Card from "@/components/Card";
import "@/assets/sass/_global.sass";

createApp(App).use(store).use(Card).use(router).mount("#app");
