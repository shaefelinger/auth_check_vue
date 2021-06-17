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
    },
  },
};
</script>
