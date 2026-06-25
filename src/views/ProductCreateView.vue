<script setup lang="ts">
import { reactive } from "vue";
import { useProductStore } from "@/stores/productStore";
import router from "@/router";
import { ref } from "vue";
interface ValidationErrors {
  [key: string]: string | null;
}
const errors = ref<ValidationErrors>({});

const productStore = useProductStore();

const form = reactive({
  name: "",
  price: "",
  stock: "",
  description: "",
});

const handleSubmit = async () => {
  const payload = {
    name: form.name,
    price: parseInt(form.price, 10),
    stock: parseInt(form.stock, 10),
    description: form.description,
  };

  try {
    errors.value = {
      name: null,
      price: null,
      stock: null,
      description: null,
    };

    await productStore.createProduct(payload);

    alert("商品が登録されました！");

    router.push("/products");
  } catch (error: unknown) {
    console.error(error);

    if (typeof error === "object" && error !== null && "errors" in error) {
      const apiErrors = error as { errors: ValidationErrors };
      errors.value = apiErrors.errors;
      return;
    } else {
      errors.value = {
        general: "商品登録に失敗しました。再度お試しください。",
        description: null,
      };
    }
  }
};
</script>

<template>
  <main>
    <h1>商品登録</h1>
    <div v-if="errors.general" class="error">
      <p>{{ errors.general[0] }}</p>
    </div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">商品名:</label>
        <input id="name" v-model="form.name" type="text" required />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      <div>
        <label for="price">価格:</label>
        <input id="price" v-model="form.price" type="number" required />
        <p v-if="errors.price" class="error">{{ errors.price }}</p>
      </div>
      <div>
        <label for="stock">在庫数:</label>
        <input id="stock" v-model="form.stock" type="number" required />
        <p v-if="errors.stock" class="error">{{ errors.stock }}</p>
      </div>
      <div>
        <label for="description">商品説明:</label>
        <textarea id="description" v-model="form.description" required></textarea>
        <p v-if="errors.description" class="error">{{ errors.description }}</p>
      </div>
      <button type="submit">登録</button>
    </form>
  </main>
</template>
