<template>
  <dialog>
    <div id="top-modalEscolhaCadastro">
        <v-icon color="#FFFFFF" @click="closeModalCadastro">mdi-close-thick</v-icon>
    </div>
    <div id="container-modalEscolhaCadastro">
        <router-link class="button-modalEscolhaCadastro" tag="button" to="/cadastro/empresa">Empresa</router-link>
        <router-link class="button-modalEscolhaCadastro" tag="button" to="/cadastro/clientes">Cliente</router-link>
    </div>
  </dialog>
</template>

<script>
export default {
    methods:{
        closeModalCadastro() {
            this.$emit("closeModalCadastro", false);
            this.$store.state.modalEscolhaCadastro = false;
        }
    }
};
</script>

<style>
#top-modalEscolhaCadastro{
    display: flex;
    justify-content: right;
    align-items: center;
    width: 95%;
    height: 35%;
}

#container-modalEscolhaCadastro {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.button-modalEscolhaCadastro {
    background-color: #FFFFFF;
    color: #6ADBD9;
    width: 30%;
    height: 50%;
    border-radius: 10px;
}
</style>