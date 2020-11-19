<template>
  <div id="app">
    {{ titulo }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Minha primeira Página Vue.js",
    };
  },
};
</script>

<style>
#app {
  background-color: brown;
  color: #fff;
}
</style>
