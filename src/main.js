import Vue from "vue";
import App from "./App.vue";
import "./common/stylus/reset.styl";
import "./common/icon/search-icon/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
