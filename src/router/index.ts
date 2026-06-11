import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "@/views/ProductListView.vue";
import ProductCreateView from "@/views/ProductCreateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/products",
    },
    {
      path: "/products",
      name: "products",
      component: ProductListView,
    },
    {
      path: "/products/new",
      name: "productsーnew",
      component: ProductCreateView,
    },
  ],
});

export default router;
