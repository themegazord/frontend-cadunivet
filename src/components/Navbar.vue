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
        <button class="btn-login"
          >Login
          <img
            class="dog-login"
            src="@/assets/cao.png"
            alt="Cachorrinho do Login"
        /></button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "nav-bar",
    data() {
        return {
            
        };
    },
    methods: {

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