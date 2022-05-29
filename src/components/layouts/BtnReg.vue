<template>
  <div class="router">
    <router-link class="btn" to="/usersView">Cadastrar</router-link>
  </div>
</template>

<script>
export default {
  name: "btnReg",
};
</script>

<style scoped>
.router {
  display: flex;
  align-items: center;
}

.router .btn {
  margin-top: 95px;
  width: 342px;
  height: 58px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  outline: none;
  text-decoration: none;
  color: #eeeeee;
  font-size: 1.2rem;
  text-align: center;
  padding: 18px;
}
</style>
