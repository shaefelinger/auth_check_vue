<template>
  <div>
    <h1>The registered users:</h1>
    <div v-for="user in userList" :key="user.id">
      {{ user.name }} - {{ user.email }} - {{ user.password }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userList: [],
    };
  },
  created() {
    axios.get('//localhost:3000/users').then(({ data }) => {
      // console.log('user data is', data);
      this.userList = data;
    });
  },
};
</script>
