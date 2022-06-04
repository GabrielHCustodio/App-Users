<template>
  <div class="about">
    <div class="bg">
      <image-template />

      <container-back></container-back>
    </div>
  </div>
</template>

<script>

import containerBack from "@/components/layouts/ContainerBack.vue";
import imageTemplate from "@/components/layouts/ImageTemplate.vue";

export default {
  components: {
    containerBack,
    imageTemplate
  }
}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg {
  max-width: 414px;
  width: 100%;
  height: 804px;
  background-image: url('/public/images/bg-peoples.svg');
}

.img-template {
  width: 307px;
  height: 99px;
  margin: 70px 53px;
  background-image: url("/public/images/peoples.svg");
  background-size: cover;
}
</style>