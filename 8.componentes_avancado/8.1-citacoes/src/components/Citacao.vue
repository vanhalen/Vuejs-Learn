<template>
  <div class="citacao">
    <!-- Aqui posso colocar qualquer coisa, div, spal, p, e o SLOT é o html que vem do filho -->
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
export default {
  props: {
    // fonte: String,
    // texto: String,
    // autor: String,
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
h1 {
  color: rgb(83, 10, 10);
}
</style>
