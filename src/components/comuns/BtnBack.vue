<template>
    <div class="router">
        <router-link class="btn" to="/">Voltar</router-link>
    </div>
</template>

<script>
export default {
    name: 'btnBack'
}
</script>

<style scoped>
.router {
  display: flex;
  align-items: center;
  margin-top: 470px;
  position: absolute;
}

.router .btn {
  width: 342px;
  height: 58px;
  border-radius: 14px;
  border: 1px solid #ffffff;
  outline: none;
  text-decoration: none;
  color: #eeeeee;
  font-size: 1.2rem;
  text-align: center;
  padding: 18px;
}
</style>