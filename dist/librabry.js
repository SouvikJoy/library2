'use strict';

var vue = require('vue');
var registerServiceWorker = require('register-service-worker');
var router = require('@/router');
var store = require('@/store');
var Card = require('@/components/Card');
require('@/assets/sass/_global.sass');
var components = require('@/components/components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var router__default = /*#__PURE__*/_interopDefaultLegacy(router);
var store__default = /*#__PURE__*/_interopDefaultLegacy(store);
var Card__default = /*#__PURE__*/_interopDefaultLegacy(Card);
var components__default = /*#__PURE__*/_interopDefaultLegacy(components);

function render(_ctx, _cache) {
  const _component_router_view = vue.resolveComponent("router-view");

  return (vue.openBlock(), vue.createBlock(_component_router_view))
}

const script = {};


script.render = render;
script.__file = "src/App.vue";

/* eslint-disable no-console */

if (process.env.NODE_ENV === "production") {
  registerServiceWorker.register(`${process.env.BASE_URL}service-worker.js`, {
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
    for (const prop in components__default["default"]) {
      // eslint-disable-next-line no-prototype-builtins
      if (components__default["default"].hasOwnProperty(prop)) {
        const component = components__default["default"][prop];
        Vue.component(component.name, component);
      }
    }
  },
};

vue.createApp(script).use(store__default["default"]).use(Card__default["default"]).use(router__default["default"]).mount("#app");

module.exports = plugin;
