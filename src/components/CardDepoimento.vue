<template>
  <div id="card-depoimento">
    <img :src="require('@/assets/' + depoimentos.foto)" :alt="depoimentos.nome">
    <span class="nome-uf-depoimento">{{ depoimentos.nome }} - {{ depoimentos.uf }}</span>
    <span class="ocupacao-depoimento">{{ depoimentos.ocupacao }}</span>
  </div>
</template>

<script>
export default {
    name: "card-depoimento",
    props: ["depoimentos"]
};
</script>

<style>
#card-depoimento {
  width: 200px;
  height: 250px;
  background-color: transparent;
  border: 3px solid #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#card-depoimento span {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;

}
#card-depoimento img {
  margin-bottom: 15px;
}
</style>