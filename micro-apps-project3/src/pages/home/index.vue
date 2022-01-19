<template>
  <div class="container">
    <h1>this is vue home page</h1>
    <button type="button" @click="goTo('/list')">go to list page</button>
    <input v-model="username" />
    <button @click="setUserName()">设置用户名</button>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const $router = useRouter();
    const $store = useStore();
    const username = ref("");
    const { proxy } = getCurrentInstance()!;

    const changeGlobalState = (name:string) => {
      if ((proxy as any).$setGlobalState) {
        (proxy as any).$setGlobalState({userInfo: {username: name}})
      }
    };

    const goTo = (url: string) => {
      $router.push({ path: url });
    };

    const setUserName = () => {
      $store.dispatch("setUserInfo", {
        username: username.value,
      });
      changeGlobalState(username.value);
    };
    return {
      setUserName,
      goTo,
      username,
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
