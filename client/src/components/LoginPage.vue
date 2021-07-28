<template>
  <div style="padding: 100px;border:10px solid;margin: 100px">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="username"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button v-on:click.prevent="login" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const user = {
        username: this.username,
        password: this.password,
      };
      console.log(user);
      store.dispatch("login", user);
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>