<template>
  <div class="router">
    <button class="btn" @click="register">Cadastrar</button>
    <router-link class="btnUsers" to="/usersView" >Usuários</router-link>
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

.router .btn {
  margin-top: 75px;
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

.router .btn:hover {
  cursor: pointer;
  opacity: 0.9;
}

.router .btnUsers {
  margin-top: 20px;
  text-decoration: none;
  font-size: 1.2rem;
  color: #ffffff;
  text-align: right;
}
</style>
