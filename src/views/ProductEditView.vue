<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const productId = route.params.id;
</script>

<template>
  <div>
    <h1>商品編集</h1>
    <p>商品ID: {{ productId }}</p>
  </div>
</template>
