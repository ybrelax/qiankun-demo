<template>
  <div class="container">
    <h1>this is vue list page</h1>
    <button type="button" @click="goTo('/home')">go to home page</button>
    <div>用户名：{{$store.state.userInfo.username}}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const $store = useStore()
const $router = useRouter();

const goTo = (url:string) => {
  $router.push({ path: url });
};

</script>

<style scoped>
.container {
  text-align: center;
}
</style>
