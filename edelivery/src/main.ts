import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import FontAwesomeIcon from "@/fontawesome-icons";

// Bootstrap 3 and the libraries
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(BootstrapVue3)
  .use(store)
  .use(router)
  .mount("#app");
