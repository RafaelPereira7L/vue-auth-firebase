<script>
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { status } from "./firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userLogged = ref(false);

    onBeforeMount(() => {
      status((user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
          userLogged.value = true;
        }
      });
    });

    return {
      userLogged,
    };
  },
};
</script>

<template>
  <header>
    <nav class="links">
      <RouterLink to="/">Inicio</RouterLink>|
      <RouterLink to="/about">Sobre</RouterLink>|
      <RouterLink v-if="!userLogged" to="/login">Login </RouterLink> <span v-if="!userLogged">|</span>
      <RouterLink v-if="!userLogged" to="/register">Register</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
body {
  background: #252525;
  color: #fff;
  text-align: center;
}

.links {
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.links > a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(96, 207, 142);
}
</style>
