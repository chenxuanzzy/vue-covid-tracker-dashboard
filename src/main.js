import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";
import VueAxios from "vue-axios";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import HighchartsVue from "highcharts-vue";
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(HighchartsVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
