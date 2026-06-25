<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <h1>商品一覧</h1>

  <ul>
    <li v-for="product in productStore.products" :key="product.id">
      {{ product.name }} / {{ product.price }}円 / 在庫: {{ product.stock }}
      <RouterLink :to="`/products/${product.id}`"> 詳細 </RouterLink>

      <RouterLink :to="`/products/${product.id}/edit`"> 編集 </RouterLink>
    </li>
  </ul>
</template>
