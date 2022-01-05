import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "@/router";
import store from "@/store";
import Card from "@/components/Card";
import "@/assets/sass/_global.sass";

import components from "@/components/components";

const plugin = {
  install(Vue) {
    for (const prop in components) {
      // eslint-disable-next-line no-prototype-builtins
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

export default plugin;

createApp(App).use(store).use(Card).use(router).mount("#app");
