<template>
  <div class="bg">
    <image-template />

    <container></container>
  </div>
</template>

<script>
import container from "@/components/comuns/Container.vue";
import imageTemplate from "@/components/comuns/ImageTemplate.vue";

export default {
  name: "backgroundView",
  components: {
    container,
    imageTemplate
  }
};
</script>

<style scoped>
.bg {
  max-width: 414px;
  width: 100%;
  height: 804px;
  background-image: url("/public/images/bg-converse.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
