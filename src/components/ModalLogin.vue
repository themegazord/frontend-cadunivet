<template>
  <dialog :class="{'escolhaCadastroShow': escolhaCadastroShow}">
    <div id="top-modalLogin">
        <v-icon color="#6ADBD9" @click="closeModal">mdi-close-thick</v-icon>
    </div>
    <div id="container-modalLogin">
        <div class="top-container-modalLogin">
            <span class="title-modaLogin">Olha você voltou 🐶</span>
            <span class="subtitle-modalLogin">Vamos entrar no sistema?</span>
        </div>
        <ModalEscolhaTipoCadastro @closeModalCadastro="closeModalCadastro" v-if="showModal" open id="modalEscolhaCadastro"/>
        <div class="body-container-modalLogin">
          <v-text-field v-model="email" label="Insira seu email" class="inputEmailLogin" required></v-text-field>
          <v-text-field v-model="password" label="Insira sua senha" class="inputPasswordLogin" required></v-text-field>
        </div>
        <div class="footer-modalLogin">
            <span class="signup">Você ainda não tem uma conta? <a id="signup" @click="openModalEscolhaCadastro">Cadastre-se</a></span>
            <button type="button" class="btn-modalLogin">Login</button>
        </div>
    </div>
  </dialog>
</template>
<script>
import ModalEscolhaTipoCadastro from "./ModalEscolhaTipoCadastro.vue";
export default {
    components: { ModalEscolhaTipoCadastro },
    data() {
        return {
            email: "",
            password: "",
            showModal: false,
        };
    },
    methods: {
        closeModal() {
            this.$emit("closeModal", false);
            this.$store.state.modalLoginShow = false;
        },
        openModalEscolhaCadastro() {
            this.showModal = true;
            this.$store.state.modalEscolhaCadastro = true;
        },
        closeModalCadastro(value){
            this.showModal = value;
            console.log(value);
        }
    },
    computed: {
        escolhaCadastroShow() {
            return this.$store.state.modalEscolhaCadastro;
        }
    }
};
</script>

<style>
.escolhaCadastroShow{
    position: fixed;
}

#modalEscolhaCadastro {
    margin: 0 auto;
    background: #6ADBD9;
    width: 20%;
    height: 15%; 
    display: block;
    position: fixed;
    flex-direction: column;
    align-items: center;
    z-index: 6;
    border: none;
    border-radius: 30px;
}

#top-modalLogin {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 95%;
  height: 15%;
}

#container-modalLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: calc(90% - 15%);
}

.top-container-modalLogin,
.body-container-modalLogin,
.footer-modalLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.body-container-modalLogin {
    width: 100%
}

.inputEmailLogin,
.inputPasswordLogin {
    width: 80%;
}

.signup {
    width: 80%;
    text-align: center;
}

.btn-modalLogin {
    background-color: #6ADBD9;
    color: #FFFFFF;
    width: 30%;
    height: 50%;
    border-radius: 50px; 
    margin-top: 10px;
}
</style>