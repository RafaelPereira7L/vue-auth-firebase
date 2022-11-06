<template>
  <div class="register">
    <h1>Register</h1>

<form class="formulario" @submit.prevent="Register">
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    id="email"
    placeholder="email@email.com"
    v-model="email"
  />
  <label for="password">Senha</label>
  <input
    type="password"
    name="password"
    id="password"
    placeholder="senha"
    v-model="password"
  />
  <button type="submit" value="Register">Registrar</button>
  <span
    >Já possui conta?
    <RouterLink class="link" to="/login">Login</RouterLink>
  </span>
</form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { storeUser } from '../firebase';



export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      storeUser(email.value, password.value)
      .then(alert("Conta criada com sucesso"))
      .catch(err => console.log(err));
    };

    return {
      Register,
      email,
      password,
    };
  }
}

</script>


<style scoped>
h1 {
  text-align: center;
  margin: 25px 0;
  font-size: 30px;
}
.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.link {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(96, 207, 142);
}

input {
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border: 2px solid rgb(96, 207, 142);
}

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
