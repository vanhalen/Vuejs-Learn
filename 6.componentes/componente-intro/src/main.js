import Vue from "vue";
import App from "./App.vue";
import TheContadores from "./TheContadores.vue";

Vue.config.productionTip = false;
Vue.component("the-contadores", TheContadores);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
