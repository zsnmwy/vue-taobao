import Vue from "vue";
import App from "./App.vue";
import "./common/stylus/reset.styl";
import "./common/icon/font-icon/iconfont.css";
import countdown from "kenyang-countdown-vue";

Vue.use(countdown);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
