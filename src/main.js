import Vue from "vue";
import App from "./App.vue";
import $ from "jquery";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

//defined as global component
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);

new Vue({
  render: h => h(App)
}).$mount("#app");

$(document).ready(function() {
  $("input#slider-on").on("change", function() {
    if ($("input#slider-on").is(":checked")) {
      $("small.supplier").css("color", "#7d7d7d");
      $("small.product").css("color", "#fff");
    } else {
      $("small.supplier").css("color", "#fff");
      $("small.product").css("color", "#7d7d7d");
    }
  });
});
