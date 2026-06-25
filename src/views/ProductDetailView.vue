<!-- src/views/ProductDetailView.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description?: string;
};

const route = useRoute();

const product = ref<Product | null>(null);

onMounted(async () => {
  const id = route.params.id;

  const response = await fetch(`/api/products/${id}`);
  product.value = await response.json();
});
</script>

<template>
  <div>
    <h1>商品詳細</h1>

    <div v-if="product">
      <p>ID: {{ product.id }}</p>
      <p>商品名: {{ product.name }}</p>
      <p>価格: {{ product.price }}円</p>
      <p>在庫: {{ product.stock }}</p>
      <p>説明: {{ product.description }}</p>

      <RouterLink :to="`/products/${product.id}/edit`"> 編集 </RouterLink>

      <RouterLink to="/products"> 一覧へ戻る </RouterLink>
    </div>

    <p v-else>読み込み中...</p>
  </div>
</template>
