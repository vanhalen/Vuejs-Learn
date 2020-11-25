<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      Idade do usuário: <strong>{{ idade }}</strong>
    </p>
    <button @click="reinicializarNome">Reinicializar Nome</button>
    <button @click="reiniciarFn">Reinicializar Nome (CallBack)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    nome: String,
    idade: Number,
    reiniciarFn: Function,
  },
  created() {
    barramento.$on("idadeMudou", (idade) => {
      this.idade = idade;
    });
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reinicializarNome() {
      // this.nome = "Ana";
      this.$emit("mudouNome", "Ana");
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
