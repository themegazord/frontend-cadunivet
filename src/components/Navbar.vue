<template>
  <nav id="nav">
    <img
      src="../assets/logo_cadunivet.png"
      alt="Logo da CadUni Veterinárias"
      id="logo"
    />
    <ul class="navbar-links">
      <!-- TODO passar os links por props -->
      <li class="link">
        <a href="#agenda-consulta-homepage">Agende sua consulta</a>
      </li>
      <li class="link"><a href="#sobre-nos-homepage">Sobre nós</a></li>
      <li class="link"><a href="#depoimentos">Depoimentos</a></li>
      <li class="link">
        <button class="btn-login" @click="openModal"
          >Login
          <img
            class="dog-login"
            src="@/assets/cao.png"
            alt="Cachorrinho do Login"
        /></button>
        <ModalLogin v-if="showModal" open id="modal" @closeModal="closeModal"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import ModalLogin from "./ModalLogin.vue";
export default {
    components: {ModalLogin},
    name: "nav-bar",
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        closeModal(value){
            this.showModal = value;
        },
        openModal() {
            this.showModal = true;
            this.$store.state.modalLoginShow = true;
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&display=swap");
#nav {
  position: relative;
  left: 0;
  top: 0;
  height: 110px;
  background-color: #cafcfb;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Modal inicio */
#modal {
  border: none;
  border-radius: 30px;
  width: 30%;
  height: 70vh;
  box-shadow: 0px 0px 100px 100px rgba(0,0,0,0.21);
  display: block;
  position: fixed;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  margin: 0 auto;
}

/* Modal Fim */

#logo {
  width: 158px;
  height: 130px;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  gap: 30px;
  margin-right: 50px;
  align-items: center;
  justify-content: center;
}

.link {
  list-style: none;
  cursor: pointer;
  font-size: 18px;
}

.link a {
  text-decoration: none;
  color: #09bbb5;
}

.dog-login {
  width: 32px;
  height: 32px;
}

.btn-login {
  width: 140px;
  height: 50px;
  background-color: #09bbb5;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 100px;
}
</style>