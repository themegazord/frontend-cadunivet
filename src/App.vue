<template>
  <div id="app">
    <navBar />
    <div id="agenda-consulta-homepage">
      <div class="pets-agenda-consulta-homepage">
        <img class="dog-golden" src="@/assets/golden.png" alt="Imagem de um cachorro da raça Golden Retriever">
        <img class="dog-maltes" src="@/assets/maltes.png" alt="Imagem de um cachorro da raça Maltês">
        <img class="cat-persian" src="@/assets/gato_persa.png" alt="Imagem de um gato persa ">
      </div>
      <div class="info-agenda-consulta-homepage">
        <h1 class="title-info-agenda-consulta-homepage">
          Bem vindo ao CadUni Veterinário
        </h1>
        <p class="description-info-agenda-consulta-homepage">Cadastre seu pet e tenha todas as informações sempre que precisar na palma da mão!</p>
        <button type="button" class="btn-info-agenda-consulta-homepage">Cadastre-se</button>
      </div>
    </div>
  </div>
</template>
<script>

import navBar from "@/components/Navbar";

export default {
    name: "App",
    components: {
        navBar,
    }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Baloo 2', sans-serif;
}
#app {
  width: 100vw;
  height: 100vh;
}

#agenda-consulta-homepage {
  background-color: #6ADBD9;
  height: calc(100vh - 110px);
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
}

.dog-golden {
  position: absolute;
  width: 250px;
  height: 350px;
  left: 96px;
  top: 162px;
  z-index: 1;
}

.dog-maltes{
  position: absolute;
  width: 240px;
  height: 290px;
  left: 250px;
  top: 250px;
  z-index: 3;
}

.cat-persian {
  position: absolute;
  width: 260px;
  height: 270px;
  left: 350px;
  top: 250px;
  z-index: 2;
}


</style>
