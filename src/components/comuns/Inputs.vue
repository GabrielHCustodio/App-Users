<template>
  <div>
    <div class="inputs">
      <label for="">Nome</label> <br />
      <input type="text" v-model="name" />
    </div>

    <div class="inputs">
      <label for="">Idade</label> <br />
      <input type="number" v-model="age" />
    </div>
  </div>
</template>

<script>
export default {
  name: "inputsForm",
  data() {
    return {
      name: '',
      age: ''
    }
  },
  mounted() {
    this.$emitter.on('informations' , () => {
      let users = JSON.parse(localStorage.getItem('users'))

        if(!users) users = []
        users.push({
          name: this.name,
          age: this.age,
          id: Math.random()
        })

        if(this.validateForm()) {
          localStorage.setItem('users' , JSON.stringify(users))
          this.resetForm()
        }
    })
  },
  methods: {
    resetForm() {
      this.name = "",
      this.age = ""
    },
    validateForm() {
      let validate = true
      if(this.name === '') validate = false
      if(this.age === '') validate = false
      return validate
    }
  }
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