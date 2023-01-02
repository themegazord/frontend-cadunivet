<template>
  <dialog>
    <div id="top-modalLogin">
        <v-icon color="#6ADBD9" @click="closeModal">mdi-close-thick</v-icon>
    </div>
    <div id="container-modalLogin">
        <div class="top-container-modalLogin">
            <span class="title-modaLogin">Olha, você voltou 🐶</span>
            <span class="subtitle-modalLogin">Vamos entrar no sistema?</span>
        </div>
        <v-form class="body-container-modalLogin">
          <InputText v-model="email" titulo="Insira seu email" class="inputEmailLogin" required="true" :regras="errorEmail"/>
          <InputText v-model="password" titulo="Insira sua senha" class="inputPasswordLogin" required="true" :regras="['required']"/>
        </v-form>
        <div class="footer-modalLogin">
            <span class="signup">Você ainda não tem uma conta? <a id="signup">Cadastre-se</a></span>
            <button type="button" class="btn-modalLogin">Login</button>
        </div>
    </div>
  </dialog>
</template>
<script>
import InputText from "./InputText.vue";
export default {
    components: {
        InputText,
    },
    data() {
        return {
            email: "",
            password: "",
            errorEmail: [
                "O campo de email é obrigatório",
                "O valor inserido não é um email válido"
            ]
        };
    },
    methods: {
        closeModal() {
            this.$emit("closeModal", false);
            this.$store.state.modalLoginShow = false;
        }
    },
    mounted() {
        console.log(this.$refs);
    },
};
</script>

<style>

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