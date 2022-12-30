<template>
  <dialog>
    <div id="top-modalLogin">
        <v-icon color="#6ADBD9" @click="closeModal">mdi-close-thick</v-icon>
    </div>
    <div id="container-modalLogin">
        <div class="top-container-modalLogin">
            <span class="title-modaLogin">Olha você voltou 🐶</span>
            <span class="subtitle-modalLogin">Vamos entrar no sistema?</span>
        </div>
        <div class="body-container-modalLogin">
          <v-text-field v-model="email" label="Insira seu email" class="inputEmailLogin" required></v-text-field>
          <v-text-field v-model="password" label="Insira sua senha" class="inputPasswordLogin" required></v-text-field>
        </div>
        <div class="footer-modalLogin">
            <span class="signup">Você ainda não tem uma conta? <a id="signup">Cadastre-se</a></span>
            <button type="button" class="btn-modalLogin">Login</button>
        </div>
    </div>
  </dialog>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        closeModal() {
            this.$emit("closeModal", false);
            this.$store.state.modalLoginShow = false;
        }
    }
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