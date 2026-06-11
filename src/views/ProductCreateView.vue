<script setup lang="ts">
import { reactive } from "vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

const form = reactive({
  name: "",
  price: "",
  stock: "",
});

const handleSubmit = () => {
  const payload = {
    name: form.name,
    price: parseInt(form.price, 10),
    stock: parseInt(form.stock, 10),
  };

  productStore.createProduct(payload);
};
</script>

<template>
  <main>
    <h1>商品登録</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">商品名:</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>
      <div>
        <label for="price">価格:</label>
        <input id="price" v-model="form.price" type="number" required />
      </div>
      <div>
        <label for="stock">在庫数:</label>
        <input id="stock" v-model="form.stock" type="number" required />
      </div>
      <button type="submit">登録</button>
    </form>
  </main>
</template>
