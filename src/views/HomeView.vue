<template>
  <div class="home">
    <background-view />  
  </div>
</template>

<script>
import backgroundView from "@/components/comuns/Background.vue"

export default {
  components: {
    backgroundView
  },
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
