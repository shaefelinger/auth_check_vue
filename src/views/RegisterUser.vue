<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label for="name"> Name: </label>
      <input v-model="name" type="text" name="name" value />

      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Register</button>
    </form>
    <p>{{ serverResponse }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      serverResponse: 'No Server Message',
    };
  },
  methods: {
    async register() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      axios.post('//localhost:3000/register', newUser).then(({ data }) => {
        console.log('user data is', data);
        this.serverResponse = data;
      });

      // -> add ERROR Handling!!
    },
  },
};
</script>
