import { createRouter, createWebHistory } from "vue-router";
import Test from "../views/Test.vue";
import Test1 from "../views/Test1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      children: [
        { path: "test", name: "test", component: Test },
        { path: "test1", name: "test1", component: Test1 },
      ],
    },
  ],
});

export default router;
