import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import ListView from "../views/ListView.vue";
import TodayQuestionView from "../views/TodayQuestionView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
  },
  {
    path: "/attq",
    name: "attq",
    component: TodayQuestionView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
