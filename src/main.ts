import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark, faCartShopping, faMinus, faBackward } from "@fortawesome/free-solid-svg-icons";
import GlobalLayout from "./layout/GlobalLayout.vue";

library.add(faXmark, faCartShopping, faMinus, faBackward);

const app = createApp(GlobalLayout);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
