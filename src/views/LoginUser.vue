<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Log In</button>
    </form>
    <p>{{ serverResponse }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      serverResponse: 'No Server Message',
    };
  },
  methods: {
    async login() {
      const enteredUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      axios.post('//localhost:3000/login', enteredUser).then(({ data }) => {
        console.log('user data is', data);
        this.serverResponse = data;
      });

      // -> add ERROR Handling!!

      // this.$store
      //   .dispatch('register', {
      //     name: this.name,
      //     email: this.email,
      //     password: this.password
      //   })
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15em;
  margin-bottom: 2em;
}

form p {
  color: red;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.6em;
  padding: 0.5em;
  margin-bottom: 1em;
  font: 1em 'Avenir', Helvetica, sans-serif;
}
</style>
