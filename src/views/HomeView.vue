<template>
  <div class="home">
    <div class="bg">
      <image-template />

      <container-reg></container-reg>
    </div>
  </div>
</template>

<script>

import containerReg from "@/components/comuns/ContainerReg.vue";
import imageTemplate from "@/components/comuns/ImageTemplate.vue";

export default {
  components: {
    containerReg,
    imageTemplate
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
  height: 804px;
  background-image: url("/public/images/bg-converse.svg");
}

.img-template {
  width: 329px;
  height: 177px;
  margin: 30px 42.5px;
  background-image: url("/public/images/converse.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
