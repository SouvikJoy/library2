import { resolveComponent, openBlock, createBlock, createApp } from 'vue';
import { register } from 'register-service-worker';
import router from '@/router';
import store from '@/store';
import Card from '@/components/Card';
import '@/assets/sass/_global.sass';
import components from '@/components/components';

function render(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");

  return (openBlock(), createBlock(_component_router_view))
}

const script = {};


script.render = render;
script.__file = "src/App.vue";

/* eslint-disable no-console */

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}

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

createApp(script).use(store).use(Card).use(router).mount("#app");

export { plugin as default };
