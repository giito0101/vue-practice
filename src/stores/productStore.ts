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
  }),
  actions: {
    fetchProducts() {
      this.products = [
        { id: 1, name: "ノートPC", price: 120000, stock: 5 },
        { id: 2, name: "マウス", price: 3000, stock: 20 },
        { id: 3, name: "キーボード", price: 8000, stock: 10 },
      ];
    },
  },
});
