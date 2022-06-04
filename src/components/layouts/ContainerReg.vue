<template>
  <div class="container-inputs">
    <text-title title="Olá!" />
    <inputs-form />
    <msg-alert v-if="displayAlert">
      <div>
        <p>{{alert.msg}}</p>
      </div>
    </msg-alert>
    <btn-reg />
  </div>
</template>

<script>
import inputsForm from "@/components/comuns/Inputs.vue";
import btnReg from "@/components/comuns/BtnReg.vue";
import textTitle from "@/components/comuns/Text.vue";
import msgAlert from "@/components/comuns/Alerta.vue"

export default {
  name: "containerReg",
  data() {
    return {
      alert: {},
      displayAlert: false
    }
  },
  components: {
    inputsForm,
    btnReg,
    textTitle,
    msgAlert
  },
  mounted() {
    this.$emitter.on('alert', (a) => {
      this.alert = a
      this.displayAlert = true
      setTimeout(() => this.displayAlert = false, 3000)
      console.log('Cheguei BRASILLLLL!')
    })
  }
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

.text {
  margin-top: 50px;
  margin-bottom: 61px;
}
</style>
