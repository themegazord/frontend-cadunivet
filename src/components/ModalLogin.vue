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
      <v-form @submit.prevent="submit" class="body-container-modalLogin">
        <v-text-field 
            v-model="email"
            label="Insira seu email"
            class="inputEmailLogin"
            :error-messages="emailErrors"
            required
            @blur="$v.email.$touch()"
            :error="!!emailErrors.length"
            :style="{ color: !!passwordErrors.length ? 'red' : 'initial' }"
            >
        </v-text-field>
        <v-text-field
            v-model="password"
            label="Insira sua senha"
            class="inputPasswordLogin"
            :error-messages="passwordErrors"
            required
            @blur="$v.password.$touch()"
            :error="!!passwordErrors.length"
            :style="{ color: !!passwordErrors.length ? 'red' : 'initial' }"
            type="password"
        ></v-text-field>
        <div class="footer-modalLogin">
          <span class="signup"
            >Você ainda não tem uma conta? <router-link to="/cadastro" tag="a" id="signup">Cadastre-se</router-link></span
          >
          <button type="submit" class="btn-modalLogin">Login</button>
        </div>
      </v-form>
    </div>
  </dialog>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
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
        },
        submit() {
            this.$v.$touch();
            if(this.$v.$invalid) {
                console.log("formulario com pendencias");
            }else{
                console.log("logado com sucesso");
            }
        },
    },
    mixins: [validationMixin],
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
        },
    },
    computed: {
        emailErrors(){
            const errors = [];

            if(!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Insira um email válido");
            !this.$v.email.required && errors.push("Insira seu email");

            return errors;
        },
        passwordErrors() {
            const errors = [];

            if(!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push("Insira sua senha");
            
            return errors;
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
  width: 100%;
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
  background-color: #6adbd9;
  color: #ffffff;
  width: 30%;
  height: 50%;
  border-radius: 50px;
  margin-top: 10px;
}
</style>