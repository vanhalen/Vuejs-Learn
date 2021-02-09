<template>
  <div class="citacao">
    {{ texto }}
  </div>
</template>

<script>
export default {
  props: {
    fonte: String,
    texto: String,
    autor: String,
  },
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
