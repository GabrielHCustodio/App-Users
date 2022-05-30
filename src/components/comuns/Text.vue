<template>
  <div class="text">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "textTitle",
  props: {title : String}
};
</script>

<style scoped>
.text h1 {
  font-size: 2.4rem;
  color: #ffffff;
}
</style>
