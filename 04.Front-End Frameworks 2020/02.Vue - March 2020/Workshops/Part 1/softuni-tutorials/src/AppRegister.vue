<template>
  <section>
    <h2 class="user-links">
      <a href="login.html">Login</a> |
      <a href="register.html" class="active-route">Register</a>
    </h2>

    <form class="user-form">
      <div class="form-group">
        <img src="https://img.icons8.com/material-sharp/42/000000/user.png" />
        <input type="text" name="username" placeholder="Username" />
      </div>

      <div class="form-group">
        <img src="https://img.icons8.com/material/42/000000/password--v1.png" />
        <input type="password" name="password" placeholder="Password" />
      </div>

      <div class="form-group">
        <img src="https://img.icons8.com/material/42/000000/password--v1.png" />
        <input type="password" name="rePassword" placeholder="Repeat password" />
      </div>

      <button class="btn">Register</button>
    </form>
  </section>
</template>


<script>
export default {
  name: "AppRegister"
};
</script>


<style scoped>
@import url("./shared/styles/FormsStyles.css");
</style>