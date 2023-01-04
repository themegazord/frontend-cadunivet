<template>
  <div>
    <navBar />
    <div id="container_cadastro">
      <v-form @submit.prevent="submit" id="form-cadastro">
        <div id="escolha-cadastro-container">
          <div class="escolha-cadastro">
            <v-checkbox
              class="checkbox-escolha-cadastro"
              v-model="checkbox_empresa"
              @click="checkbox_cliente = !checkbox_empresa"
            ></v-checkbox>
            <div class="info-escolha-cadastro">
              <p class="p-escolha-cadastro">
                Somos um<br />hospital e/ou petshop
              </p>
            </div>
          </div>
          <div class="escolha-cadastro">
            <v-checkbox
              class="checkbox-escolha-cadastro"
              v-model="checkbox_cliente"
              @click="checkbox_empresa = !checkbox_cliente"
            ></v-checkbox>
            <div class="info-escolha-cadastro">
              <p class="p-escolha-cadastro">
                Sou o(a)<br />dono(a) e/ou responsável
              </p>
            </div>
          </div>
        </div>
        <div id="form-cadastro-container">
          <v-text-field
            class="input-cadastro"
            v-model="nome"
            label="Insira seu nome"
            v-if="checkbox_cliente"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="nome_empresa"
            label="Qual nome da empresa"
            v-if="checkbox_empresa"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="nome_social"
            label="Como devemos chamá-lo"
            v-if="checkbox_cliente"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="cpf_cnpj"
            label="Insira seu CPF ou CNPJ"
            v-if="checkbox-cliente"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="cnpj"
            label="Insira o CNPJ da sua empresa"
            v-if="checkbox_empresa"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="email"
            label="Insira seu e-mail"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="confirma_email"
            label="Confirme seu e-mail"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="endereco.logradouro"
            label="Endereço"
          ></v-text-field>
          <div class="group-endereco-cadastro">
            <v-text-field
              class="input-cadastro"
              v-model="endereco.complemento"
              label="Complemento"
            ></v-text-field>
            <v-text-field
              class="input-cadastro"
              v-model="endereco.numero"
              label="Numero"
            ></v-text-field>
          </div>
          <div class="group-endereco-cadastro">
            <v-text-field
              class="input-cadastro"
              v-model="endereco.bairro"
              label="Bairro"
            ></v-text-field>
            <v-text-field
              class="input-cadastro"
              v-model="endereco.cep"
              label="CEP"
            ></v-text-field>
          </div>
          <v-text-field
            class="input-cadastro"
            v-model="estado"
            label="Estado"
          ></v-text-field>
          <v-text-field
            class="input-cadastro"
            v-model="cidade"
            label="Cidade"
          ></v-text-field>
          <div class="aceite-termos">
            <v-checkbox v-model="checkbox_aceite_termos"></v-checkbox>
            <p>Li os <a>termos</a> e <a>condições</a> da plataforma</p>
          </div>
          <button type="submit" id="btn-form-cadastro">Cadastrar</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/Navbar";
export default {
    name: "cadastro-geral",
    components: {
        navBar,
    },
    data() {
        return {
            checkbox_empresa: true,
            checkbox_cliente: false,
            nome: "",
            nome_empresa: "",
            nome_social: "",
            cpf_cnpj: "",
            cnpj: "",
            email: "",
            confirma_email: "",
            endereco: {
                logradouro: "",
                complemento: "",
                numero: "",
                bairro: "",
                cep: "",
            },
            estado: "",
            cidade: "",
            checkbox_aceite_termos: false,
        };
    },
};
</script>

<style>
#container_cadastro {
  width: 100%;
  height: 200vh;
  background-image: url("../../assets/background_cadastro.png");
  background-repeat: repeat-y;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#form-cadastro {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 70px;
  gap: 30px;
}

#escolha-cadastro-container {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
}

.escolha-cadastro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 250px;
  background-color: #ffffff;
  border-radius: 30px;
  gap: 20px;
}

.checkbox-escolha-cadastro {
  margin-top: 0px !important;
}

.p-escolha-cadastro {
  text-align: center;
}

#form-cadastro-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: #ffffff;
  border-radius: 30px;
  padding-top: 20px;
}

.input-cadastro {
  width: 80%;
}

.group-endereco-cadastro,
.aceite-termos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 10px;
}

.aceite-termos a {
  color: #09BBB5;
  text-decoration: underline;
  cursor: pointer;
}

#btn-form-cadastro {
  width: 70%;
  height: 50px;
  color: #FFFFFF;
  background-color: #09BBB5;
  border-radius: 20px;
  font-size: 22px;
  margin-bottom: 30px;
}
</style>