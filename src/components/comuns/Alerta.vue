<template>
  <div :class="colorAlert">
    <p>{{ this.msg }}</p>
  </div>
</template>

<script>
export default {
  name: "msgAlert",
  props: { tipo: String, msg: String },
  computed: {
    colorAlert() {
      switch (this.tipo) {
        case "success":
          return "alert alert-success";
        case "error":
          return "alert alert-error";
        default:
          return "alert alert-success";
      }
    },
  },
};
</script>

<style scoped>
.alert {
  width: 342px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
}

.alert-success {
  background: rgb(12, 146, 12);
}

.alert-error {
  background: rgb(241, 11, 11);
}

.alert-success p,
.alert-error p {
    color: white;
    font-size: 1.2rem;
}
</style>
