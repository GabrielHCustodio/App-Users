<template>
  <div class="home">
    <div class="bg">
      <h1>Cadastro de Usuários</h1>

      <button @click="cadastrar">
        <router-link to="/usersView">Cadastrar</router-link>
      </button>
    </div>
  </div>
</template>

<script>

 export default {
  methods: {
    cadastrar() {
      console.log('Cadastrado')
    }
  }
 }
</script>

<style scoped>
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg {
    max-width: 414px;
    width: 100%;
    height: 896px;
    background-image: url('/public/images/bg-converse.svg');
  }
</style>
