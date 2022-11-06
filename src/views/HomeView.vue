<template>
  <main>
    <h1>Bem vindo, {{ name }}</h1>
    <button @click="Logout">Logout</button>
  </main>
</template>


<script>
import { ref, onBeforeMount } from 'vue';
import { user, Logout } from '../firebase';

export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      if(user()) {
        name.value = user().email.split("@")[0];
      }
    })

    return {
      name,
      Logout
    }
  }
}

</script>

<style>
  button {
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: rgb(96, 207, 142);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
</style>