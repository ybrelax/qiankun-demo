<template>
  <div class="container">
    <h1>this is vue home page</h1>
    <button type="button" @click="goTo('/list')">go to list page</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const $router = useRouter();

const goTo = (url) => {
  $router.push({ path: url });
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
