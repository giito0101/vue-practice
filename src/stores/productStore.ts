import { defineStore } from "pinia";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
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
      const data = await response.json();

      this.products = Array.isArray(data) ? data : Object.values(data);
    },
    async createProduct(product: Omit<Product, "id">) {
      const response = await fetch("http://localhost:8000/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      const newProduct = await response.json();
      this.products.push(newProduct);
    },
    async updateProduct(product: Product) {
      const response = await fetch(`http://localhost:8000/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      const updatedProduct = await response.json();

      const index = this.products.findIndex((p) => p.id === updatedProduct.id);

      if (index !== -1) {
        this.products[index] = updatedProduct;
      }

      return updatedProduct;
    },
  },
});
