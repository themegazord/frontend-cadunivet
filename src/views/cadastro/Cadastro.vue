<template>
  <div>
    <navBar />
    <div id="container_cadastro">
      <v-form @submit.prevent="submit" id="form-cadastro" ref="form">
        <div id="form-cadastro-container">
          <v-text-field class="input-cadastro" v-model="nome" label="Insira seu nome" 
            :error-messages="nomeErros" :error="!!nomeErros.length"
            :style="{ color: !!nomeErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="nome_social" label="Como devemos chamá-lo"
            :error-messages="nomeSocialErros" :error="!!nomeSocialErros.length"
            :style="{ color: !!nomeSocialErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="cpf_cnpj" label="Insira seu CPF ou CNPJ"  
            v-mask="['###.###.###-##', '##.###.###/####-##']" :error-messages="cpfCnpjErros"
            :error="!!cpfCnpjErros.length" :style="{ color: !!cpfCnpjErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="email" label="Insira seu e-mail" :error-messages="emailErros"
            :error="!!emailErros.length" :style="{ color: !!emailErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="confirma_email" label="Confirme seu e-mail"
            :error-messages="confirmaEmailErros" :error="!!confirmaEmailErros.length"
            :style="{ color: !!confirmaEmailErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="senha" label="Insira sua senha"
            :append-icon="mostraSenha ? 'mdi-eye' : 'mdi-eye-off'" :type="mostraSenha ? 'text' : 'password'"
            @click:append="mostraSenha = !mostraSenha" :error-messages="senhaErros" :error="!!senhaErros.length"
            :style="{ color: !!senhaErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="confirma_senha" label="Confirme sua senha"
            :append-icon="mostraConfirmaSenha ? 'mdi-eye' : 'mdi-eye-off'"
            :type="mostraConfirmaSenha ? 'text' : 'password'" @click:append="mostraConfirmaSenha = !mostraConfirmaSenha"
            :error-messages="confirmaSenhaErros" :error="!!confirmaSenhaErros.length"
            :style="{ color: !!confirmaSenhaErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="endereco.logradouro" label="Endereço"
            :error-messages="enderecoLogradouroErros" :error="!!enderecoLogradouroErros.length"
            :style="{ color: !!enderecoLogradouroErros.length ? 'red' : 'initial' }"></v-text-field>
          <div class="group-endereco-cadastro">
            <v-text-field class="input-cadastro" v-model="endereco.complemento" label="Complemento"
              :error-messages="enderecoComplementoErros" :error="!!enderecoComplementoErros.length"
              :style="{ color: !!enderecoComplementoErros.length ? 'red' : 'initial' }"></v-text-field>
            <v-text-field class="input-cadastro" v-model="endereco.numero" label="Numero"
              :error-messages="enderecoNumeroErros" :error="!!enderecoNumeroErros.length"
              :style="{ color: !!enderecoNumeroErros.length ? 'red' : 'initial' }"></v-text-field>
          </div>
          <div class="group-endereco-cadastro">
            <v-text-field class="input-cadastro" v-model="endereco.bairro" label="Bairro"
              :error-messages="enderecoBairroErros" :error="!!enderecoBairroErros.length"
              :style="{ color: !!enderecoBairroErros.length ? 'red' : 'initial' }"></v-text-field>
            <v-text-field class="input-cadastro" v-model="endereco.cep" label="CEP" :error-messages="enderecoCEPErros"
              :error="!!enderecoCEPErros.length"
              :style="{ color: !!enderecoCEPErros.length ? 'red' : 'initial' }"></v-text-field>
          </div>
          <v-text-field class="input-cadastro" v-model="estado" label="Estado" :error-messages="estadoErros"
            :error="!!estadoErros.length" :style="{ color: !!estadoErros.length ? 'red' : 'initial' }"></v-text-field>
          <v-text-field class="input-cadastro" v-model="cidade" label="Cidade" :error-messages="cidadeErros"
            :error="!!cidadeErros.length" :style="{ color: !!cidadeErros.length ? 'red' : 'initial' }"></v-text-field>
          <div class="aceite-termos">
            <v-checkbox v-model="checkbox_aceite_termos"></v-checkbox>
            <p>Li os <a>termos</a> e <a>condições</a> da plataforma</p>
          </div>
          <button id="btn-form-cadastro" type="submit" :disabled="!checkbox_aceite_termos">Cadastrar</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/Navbar";
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
export default {
  name: "cadastro-geral",
  components: {
    navBar,
  },
  data() {
    return {
      mostraSenha: false,
      mostraConfirmaSenha: false,
      nome: "",
      nome_social: "",
      cpf_cnpj: "",
      email: "",
      confirma_email: "",
      senha: "",
      confirma_senha: "",
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
  methods: {
    validaCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g, "");
      if (cpf == "") return false;
      // Elimina CPFs invalidos conhecidos	
      if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
      // Valida 1o digito	
      let add = 0;
      for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
      let rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
        rev = 0;
      if (rev != parseInt(cpf.charAt(9)))
        return false;
      // Valida 2o digito	
      add = 0;
      for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
        rev = 0;
      if (rev != parseInt(cpf.charAt(10)))
        return false;
      return true;
    },
    validaCNPJ(cnpj) {
      cnpj = cnpj.replace(/[^\d]+/g, "");

      if (cnpj == "") return false;

      if (cnpj.length != 14)
        return false;

      // Elimina CNPJs invalidos conhecidos
      if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

      // Valida DVs
      let tamanho = cnpj.length - 2;
      let numeros = cnpj.substring(0, tamanho);
      let digitos = cnpj.substring(tamanho);
      let soma = 0;
      let pos = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
          pos = 9;
      }
      let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0))
        return false;

      tamanho = tamanho + 1;
      numeros = cnpj.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
          pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1))
        return false;

      return true;
    },
    submit() {
      // this.$v.$touch();
      // if(this.checkboxCliente) {
      //   console.log("cliente", this.checkboxCliente);
      //   this.$v.nome.$touch();
      //   this.$v.nome_social.$touch();
      //   this.$v.cpf_cnpj.$touch();
      //   this.$v.email.$touch();
      //   this.$v.confirma_email.$touch();
      //   this.$v.senha.$touch();
      //   this.$v.confirma_senha.$touch();
      //   this.$v.endereco.logradouro.$touch();
      //   this.$v.endereco.complemento.$touch();
      //   this.$v.endereco.numero.$touch();
      //   this.$v.endereco.bairro.$touch();
      //   this.$v.endereco.cep.$touch();
      //   this.$v.estado.$touch();
      //   this.$v.cidade.$touch();
      // }

      // if(this.checkboxEmpresa) {
      //   console.log("empresa", this.checkboxEmpresa);
      //   this.$v.nome_empresa.$touch();
      //   this.$v.cnpj.$touch();
      //   this.$v.email.$touch();
      //   this.$v.confirma_email.$touch();
      //   this.$v.senha.$touch();
      //   this.$v.confirma_senha.$touch();
      //   this.$v.endereco.logradouro.$touch();
      //   this.$v.endereco.complemento.$touch();
      //   this.$v.endereco.numero.$touch();
      //   this.$v.endereco.bairro.$touch();
      //   this.$v.endereco.cep.$touch();
      //   this.$v.estado.$touch();
      //   this.$v.cidade.$touch();
      // }
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("formulario com pendencias");
      } else {
        console.log("cadastrado com sucesso");
      }
    }
  },
  mixins: [validationMixin],
  validations: {
    nome: {
      required,
    },
    nome_social: {
      required,
    },
    cpf_cnpj: {
      required,
    },
    email: {
      required,
      email,
      sameAs: sameAs("confirma_email"),
    },
    confirma_email: {
      required,
      email,
      sameAs: sameAs("email")
    },
    senha: {
      required,
      minLength: minLength(8),
      sameAs: sameAs("confirma_senha")
    },
    confirma_senha: {
      required,
      sameAs: sameAs("senha")
    },
    endereco: {
      logradouro: {
        required
      },
      complemento: {
        required
      },
      numero: {
        required
      },
      bairro: {
        required
      },
      cep: {
        required
      },
    },
    estado: {
      required
    },
    cidade: {
      required
    },
  },
  // TODO Verificar posteriormente junto ao backend as validações de tamanho dos campos.
  computed: {
    nomeErros() {
      const erros = [];

      if (!this.$v.nome.$dirty) return erros;
      !this.$v.nome.required && erros.push("O campo nome deve ser preenchido corretamente");
      return erros;
    },
    nomeSocialErros() {
      const erros = [];

      if (!this.$v.nome_social.$dirty) return erros;
      !this.$v.nome_social.required && erros.push("O campo nome social deve ser preenchido corretamente");

      return erros;
    },
    cpfCnpjErros() {
      const erros = [];
      const cpfCnpjLimpo = this.cpf_cnpj.replace(/[^\d]+/g, "");
      const tamanhoCPFCNPJ = cpfCnpjLimpo.length;

      if (!this.$v.cpf_cnpj.$dirty) return erros;
      if (tamanhoCPFCNPJ == 11) {
        !this.validaCPF(cpfCnpjLimpo) && erros.push("CPF Inválido"); // caso o cpf seja invalido matematicamente
      }
      if (tamanhoCPFCNPJ == 14) {
        !this.validaCNPJ(cpfCnpjLimpo) && erros.push("CNPJ Inválido"); // caso o cnpj seja invalido matematicamente
      }
      !this.$v.cpf_cnpj.required && erros.push("O campo CPF/CNPJ deve ser preenchido corretamente");

      return erros;
    },
    emailErros() {
      const erros = [];

      if (!this.$v.email.$dirty) return erros;
      !this.$v.email.required && erros.push("O campo e-mail deve ser preenchido corretamente");
      !this.$v.email.email && erros.push("Insira um e-mail válido");
      !this.$v.email.sameAs && erros.push("Os campos de e-mail e confirmação de e-mail devem ser idênticos");

      return erros;
    },
    confirmaEmailErros() {
      const erros = [];

      if (!this.$v.confirma_email.$dirty) return erros;
      !this.$v.confirma_email.required && erros.push("O campo de confirmação de e-mail deve ser preenchido corretamente");
      !this.$v.confirma_email.email && erros.push("Insira um e-mail válido");
      !this.$v.confirma_email.sameAs && erros.push("Os campos de confirmação de email e e-mail devem ser idênticos");

      return erros;
    },
    senhaErros() {
      const erros = [];

      if (!this.$v.senha.$dirty) return erros;
      !this.$v.senha.required && erros.push("O campo de senha deve ser preenchido corretamente");
      !this.$v.senha.minLength && erros.push("A senha deve ter no minimo 8 caracteres");
      !this.$v.senha.sameAs && erros.push("Os campos de senha e confirmação de senha devem ser idênticos");

      return erros;
    },
    confirmaSenhaErros() {
      const erros = [];

      if (!this.$v.confirma_senha.$dirty) return erros;
      !this.$v.confirma_senha.required && erros.push("O campo de confirmação de senha deve ser preenchido corretamente");
      !this.$v.confirma_senha.sameAs && erros.push("Os campos de confirmação de senha e senha devem ser idênticos");

      return erros;
    },
    enderecoLogradouroErros() {
      const erros = [];

      if (!this.$v.endereco.logradouro.$dirty) return erros;
      !this.$v.endereco.logradouro.required && erros.push("O campo de endereço deve ser preenchido corretamente");

      return erros;
    },
    enderecoComplementoErros() {
      const erros = [];

      if (!this.$v.endereco.complemento.$dirty) return erros;
      !this.$v.endereco.complemento.required && erros.push("O campo de complemento deve ser preenchido corretamente");

      return erros;
    },
    enderecoNumeroErros() {
      const erros = [];

      if (!this.$v.endereco.numero.$dirty) return erros;
      !this.$v.endereco.numero.required && erros.push("O campo de numero de endereço deve ser preenchido corretamente");

      return erros;
    },
    enderecoBairroErros() {
      const erros = [];

      if (!this.$v.endereco.bairro.$dirty) return erros;
      !this.$v.endereco.bairro.required && erros.push("O campo de bairro deve ser preenchido corretamente");

      return erros;
    },
    enderecoCEPErros() {
      const erros = [];

      if (!this.$v.endereco.cep.$dirty) return erros;
      !this.$v.endereco.cep.required && erros.push("O campo de CEP deve ser preenchido corretamente");

      return erros;
    },
    estadoErros() {
      const erros = [];

      if (!this.$v.estado.$dirty) return erros;
      !this.$v.estado.required && erros.push("O campo de estado deve ser preenchido corretamente");

      return erros;
    },
    cidadeErros() {
      const erros = [];

      if (!this.$v.cidade.$dirty) return erros;
      !this.$v.cidade.required && erros.push("O campo de cidade deve ser preenchido corretamente");

      return erros;
    },
  }
};
</script>

<style>
#container_cadastro {
  width: 100vw;
  height: 120vh;
  background-image: url("../../assets/background_cadastro.png");
  background-size: 100vw;
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