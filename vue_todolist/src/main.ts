import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
// import 'quasar/src/css/index.sass'
import "quasar/dist/quasar.css";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
});
app.mount("#app");
