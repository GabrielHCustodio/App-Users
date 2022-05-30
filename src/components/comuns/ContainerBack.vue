<template>
  <div class="container-inputs">
    <text-title title="Usuários" />

    <users-register />

    <btn-back />
  </div>
</template>

<script>
import usersRegister from "@/components/layouts/Register.vue";
import btnBack from "@/components/layouts/BtnBack.vue";
import textTitle from "@/components/comuns/Text.vue"

export default {
  name: "containerBack",
  components: {
    btnBack,
    textTitle,
    usersRegister
  },
};
</script>

<style scoped>
.container-inputs {
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
  position: relative;
}

.text {
  margin-top: 50px;
  margin-bottom: 31px;
}

</style>