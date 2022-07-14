<template>
  <div class="router">
    <router-link class="btnUsers" to="/usersView" @click="register">Cadastrar</router-link>
  </div>
</template>

<script>
export default {
  name: 'btnReg',
  methods: {
    register() {
      this.$emitter.emit('informations')
    }
  }
}
</script>

<style scoped>
.router {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.router a {
  text-decoration: none;
}

.router .btnUsers {
  margin-top: 45px;
  width: 342px;
  height: 58px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  outline: none;
  color: #eeeeee;
  font-size: 1.2rem;
  text-align: center;
  padding: 18px;
}

.router .btnUsers:hover {
  cursor: pointer;
  opacity: 0.9;
}
</style>
