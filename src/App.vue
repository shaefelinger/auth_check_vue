<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cookies">Cookies</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/userlist">User-List</router-link>
    </div>
    <router-view class="page" />
  </div>
</template>

<style>
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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
