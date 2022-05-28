<template>
  <div class="home">
    <div class="bg">
      <div class="img-template"></div>
      
      <div class="container-inputs">

        <div class="text">
          <h1>Olá!</h1>
        </div>

        <div class="inputs">
          <label for="">Nome</label> <br>
          <input type="text">
        </div>

        <div class="inputs">
          <label for="">Idade</label> <br>
          <input type="number">
        </div>

        <router-link class="btn" to="/usersView" @click="cadastrar">Cadastrar</router-link>
      </div>

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

  /* img-fundo */
  .bg {
    max-width: 414px;
    width: 100%;
    height: 804px;
    background-image: url('/public/images/bg-converse.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* img-converse */
  .bg .img-template {
    width: 329px;
    height: 177px;
    margin: 30px 42.5px;
    background-image: url('/public/images/converse.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* background-input */
  .bg .container-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 565px;
    background: linear-gradient(
      157.44deg, 
      rgba(255, 255, 255, 0.6) 0.84%,
      rgba(255, 255, 255, 0.6) 0.85%, 
      rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;
  }

  /* text */
  .bg .container-inputs .text {
    margin-top: 50px;
    margin-bottom: 61px;
  }

  .bg .container-inputs .text h1 {
    font-size: 2.4rem;
    color: #ffffff;
  }

  /* inputs */
  .bg .container-inputs .inputs {
    margin-bottom: 40px;
  }

  .bg .container-inputs .inputs label {
    margin-left: 10px;
    font-size: 1.2rem;
    color: #EEEEEE;
  }

  .bg .container-inputs .inputs input {
    width: 342px;
    height: 48px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 1.5rem;
    color: #EEEEEE;
  }

  /* Cadastrar */
  .bg .btn {
    margin-top: 95px;
    width: 342px;
    height: 58px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    outline: none;
    text-decoration: none;
    color: #EEEEEE;
    font-size: 1.2rem;
    text-align: center;
    padding: 18px;
  }
</style>
