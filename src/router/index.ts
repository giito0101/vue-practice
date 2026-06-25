import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "@/views/ProductListView.vue";
import ProductCreateView from "@/views/ProductCreateView.vue";
import ProductEditView from "@/views/ProductEditView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";

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
    {
      path: "/products/:id/edit",
      name: "product-edit",
      component: ProductEditView,
    },
    {
      path: "/products/:id",
      name: "product-detail",
      component: ProductDetailView,
    },
  ],
});

export default router;
