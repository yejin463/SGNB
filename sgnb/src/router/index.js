import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import ListView from "../views/ListView.vue";
import TodayQuestionView from "../views/TodayQuestionView.vue";
import QuestionRecommendView from "../views/QuestionRecommendView.vue";
import PreviousQuestionView from "../views/PreviousQuestionView.vue";
import ShareQuestionView from "../views/ShareQuestionView.vue";
import AnswerView from "../views/AnswerView.vue";

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
  {
    path: "/rqtm",
    name: "rqtm",
    component: QuestionRecommendView,
  },
  {
    path: "/atpq",
    name: "atpq",
    component: PreviousQuestionView,
  },
  {
    path: "/sqwo",
    name: "sqwo",
    component: ShareQuestionView,
  },
  {
    path: "/attq/answer",
    name: "answer",
    component: AnswerView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
