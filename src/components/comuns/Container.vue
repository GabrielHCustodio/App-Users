<template>
  <div class="container-inputs">
    <text-title />

    <inputs-form />

    <btn-reg />
  </div>
</template>

<script>
import inputsForm from "@/components/layouts/Inputs.vue";
import btnReg from "@/components/layouts/BtnReg.vue";
import textTitle from "@/components/comuns/Text.vue"

export default {
  name: "container",
  components: {
    inputsForm,
    btnReg,
    textTitle
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
}
</style>
