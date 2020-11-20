import Vue from "vue";
import App from "./App.vue";
import TheContador from "./TheContador.vue";

Vue.config.productionTip = false;
Vue.component("the-contador", TheContador);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
