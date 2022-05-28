<template>
  <div class="about">
    <div class="background">
      <h1>Usuários cadastrados</h1>

      <button>
        <router-link to="/">Voltar</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
}

.background {
  width: 414px;
  height: 896px;
  background-image: url('/public/images/bg-peoples.svg');
}
</style>
