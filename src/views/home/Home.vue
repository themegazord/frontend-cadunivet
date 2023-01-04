<template>
    <div id="homepage" :class="{'loginShow': loginShow}">
      <navBar agenda="true" sobrenos="true" depoimentos="true"/>
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
          <router-link class="btn-info-agenda-consulta-homepage" tag="button" to="/cadastro">Cadastre-se</router-link>
        </div>
      </div>
      <div id="sobre-nos-homepage">
        <div class="info-sobre-nos-homepage">
          <h2 class="title-info-sobre-nos-homepage">Sobre nós</h2>
          <p class="description-info-sobre-nos-homepage">
            Somos uma ONG com mais de 6 anos de atuação, com o objetivo de democratizar e simplificar o cuidado com o pet, oferecendo a melhor experiência para tutores e autonomia em atendimentos  médico-veterinários.<br><br>
            Somos apaixonados por pets, e sabemos que cada laço é único! <br><br>
            Por isso oferecemos aos nossos clientes experiência de compra e atendimento diferenciado em todo o segmento animal, reunindo todos os dados seu bichinho em um só lugar, com proteção e facilidade.<br><br>
            Trabalhamos para que a relação entre pets e suas familias seja melhor a cada dia. Nosso site é preparado e organizado para que você encontrar facilmente o prontuário do seu pet a qualquer hora e no lugar que preferir.<br><br>
          </p>
        </div>
        <img class="enferemeira-sobre-nos-homepage" src="@/assets/enfermeira.png" alt="Imagem de uma pessoa da área da saude animal segurando um gato rajado">
      </div>
      <div id="depoimentos">
        <h2 class="title-depoimentos">Depoimentos</h2>
        <hr>
        <div id="card-depoimento-container">
          <cardDepoimento class="card-depoimento" :depoimentos="d" v-for="(d, index) in depoimentos" :key="index"/>
        </div>
        <hr>
      </div>
      <a href="#" id="link-topo">&#9650;</a>
    </div>
  </template>
<script>
  
import navBar from "@/components/Navbar";
import cardDepoimento from "@/components/CardDepoimento";
  
export default {
    name: "home-page",
    components: {
        navBar,
        cardDepoimento,
    },
    data() {
        return {
            depoimentos: [
                {
                    "nome": "Stella Gabriely",
                    "uf": "MS",
                    "ocupacao": "Médica Veterinária",
                    "foto": "stella-gabrielly.png"
                },
                {
                    "nome": "Gael Cláudio",
                    "uf": "SP",
                    "ocupacao": "Diretor HUV - Unicamp",
                    "foto": "gael-claudio.png"
                },
                {
                    "nome": "Joana Agatha",
                    "uf": "MG",
                    "ocupacao": "Cliente CadUni Vet.",
                    "foto": "joana-agatha.png"
                },
                {
                    "nome": "Guilherme Daniel",
                    "uf": "RJ",
                    "ocupacao": "Dono da Rio Petshop",
                    "foto": "guilherme-daniel.png"
                },
            ]
        };
    },
    computed:{
        loginShow(){
            return this.$store.state.modalLoginShow;
        }
    }
};
</script>
  
  <style>

  #homepage {
    width: 100%;
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
  
  .info-agenda-consulta-homepage {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  
  .title-info-agenda-consulta-homepage {
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 50px;
    color: #FFFFFF;
    width: 450px;
  }
  
  .description-info-agenda-consulta-homepage {
    margin-top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 44px;
    color: #FFFFFF;
    width: 430px;
  }
  
  .btn-info-agenda-consulta-homepage{
    width: 230px;
    height: 60px;
    background-color: transparent;
    border: 5px solid #FFFFFF;
    border-radius: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    color: #FFFFFF;
    transition: .5s;
  }

  .btn-info-agenda-consulta-homepage:hover {
    background-color: #FFFFFF;
    color: #6ADBD9;
    border: none;
    cursor: pointer;
  }
  
  #sobre-nos-homepage {
    background-color: #9AECEA;
    height: 100vh;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  
  .info-sobre-nos-homepage {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
    color: #FFFFFF;
  }
  
  .description-info-sobre-nos-homepage {
    width: 450px;
    padding: 30px;
    height: calc(100vh - 100px);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }
  
  #depoimentos {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    background-color: #6ADBD9;
  }
  
  .title-depoimentos {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    margin: 10px auto;
  }
  
  #depoimentos hr {
    width: 80%;
    height: 5px;
    background-color: #FFFFFF;
    border: none;
  }
  
  #card-depoimento-container {
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .card-depoimento {
    margin: 10px 0;
  }
  
  #link-topo{
    text-decoration: none;
    color: #09BBB5;
    background: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    box-shadow: 3px 3px 10px #999999;
  }

  .loginShow {
    position: fixed;
  }
  </style>