<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/productStore";

const route = useRoute();

const productStore = useProductStore();

const productId = Number(route.params.id);

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts();
  }
});

const product = computed(() => productStore.products.find((p) => p.id === productId) ?? null);
</script>

<template>
  <div>
    <h1>商品詳細</h1>

    <div v-if="product">
      <p>ID: {{ product.id }}</p>
      <p>商品名: {{ product.name }}</p>
      <p>価格: {{ product.price }}円</p>
      <p>在庫: {{ product.stock }}</p>
      <p>説明: {{ product.description || "なし" }}</p>

      <RouterLink :to="`/products/${product.id}/edit`">編集</RouterLink>

      <RouterLink to="/products">一覧へ戻る</RouterLink>
    </div>

    <p v-else>読み込み中...</p>
  </div>
</template>
