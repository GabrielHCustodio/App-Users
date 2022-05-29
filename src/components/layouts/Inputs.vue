<template>
  <div>
    <div class="inputs">
      <label for="">Nome</label> <br />
      <input type="text" />
    </div>

    <div class="inputs">
      <label for="">Idade</label> <br />
      <input type="number" />
    </div>
  </div>
</template>

<script>
export default {
  name: "inputsForm",
};
</script>

<style scoped>
.inputs {
  margin-bottom: 40px;
}

.inputs label {
  margin-left: 10px;
  font-size: 1.2rem;
  color: #eeeeee;
}

.inputs input {
  width: 342px;
  height: 48px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1.5rem;
  color: #eeeeee;
}
</style>
