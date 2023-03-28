import { createApp } from "vue";
import App from "@/App.vue";
import Router from "@/router";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Legend, Tooltip);

createApp(App).use(Router).mount("#app");
