import { defineStore } from "pinia";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      this.products = await response.json();
    },
  },
});
