<template>
  <div class="home">
    <h1>Cookie-Monster</h1>
    <form @submit.prevent="submitCookie">
      <label>Key: </label>
      <input type="text" v-model="cookieKey" placeholder="key" />
      <label>Value: </label>
      <input type="text" v-model="cookieValue" placeholder="value" />

      <div>
        <label>Expires (in Minutes)</label>
        <input
          type="number"
          v-model.number="cookieExpire"
          placeholder="expire-minutes"
        />
      </div>
      <button>submit</button>
    </form>

    <form @submit.prevent="searchCookie(searchName)">
      <label>Search for: </label>
      <input type="text" v-model="searchName" placeholder="key" />
      <button>Search Cookie</button>
    </form>

    <form @submit.prevent="removeCookie(removeName)">
      <label>remove: </label>
      <input type="text" v-model="removeName" placeholder="key" />
      <button>remove</button>
    </form>

    <h1>All Cookies:</h1>
    <p v-for="cookie in allCookies" :key="cookie">{{ cookie }}</p>
    <form @submit.prevent="updateCookies">
      <button>Get All Cookies</button>
    </form>

    <h1>Check Server</h1>
    <button @click="sendGetRequest('')">Send a GET-request /</button>
    <p>{{ serverResponse }}</p>
    <button @click="sendGetRequest('set')">Send a GET-request /set</button>
    <button @click="sendGetRequest('read')">Send a GET-request /read</button>
  </div>
</template>

<script>
import axios from 'axios';
import * as cookies from '@/helpers/CookieHelper.js';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      cookieKey: 'key',
      cookieValue: 'value',
      cookieExpire: null,
      searchName: '',
      removeName: '',
      allCookies: [],
      serverResponse: 'No Response yet',
    };
  },

  methods: {
    submitCookie() {
      cookies.set(this.cookieKey, this.cookieValue, this.cookieExpire);
      this.updateCookies();
    },
    updateCookies() {
      this.allCookies = cookies.getAll();
    },
    searchCookie(cookieName) {
      alert(`The Value of "${cookieName}" is: ${cookies.get(cookieName)}`);
    },
    removeCookie(removeName) {
      cookies.remove(removeName);
      this.updateCookies();
    },
    async sendGetRequest(route) {
      axios.get('//localhost:3000/' + route).then(({ data }) => {
        console.log('get request', data);
        this.serverResponse = data;
      });
    },
  },
  mounted() {
    this.updateCookies();
  },
};
</script>
