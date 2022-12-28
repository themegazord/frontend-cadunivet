<template>
  <nav id="nav">
   <img src="../assets/logo_cadunivet.png" alt="Logo da CadUni Veterinárias" id="logo">
    <ul class="navbar-links"> 
        <!-- TODO passar os links por props -->
        <li class="link">Agende sua consulta</li>
        <li class="link">Sobre nós</li>
        <li class="link">Depoimentos</li>
        <li class="link">Contato</li>
        <li class="link">
            <span class="btn-login">Login <img class="dog-login" src="@/assets/cao.png" alt="Cachorrinho do Login"></span>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "nav-bar",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&display=swap');
#nav {
    position: relative;
    left: 0;
    top: 0;
    height: 110px;
    background-color: #CAFCFB;
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
    color: #09BBB5;
    list-style: none;
    cursor: pointer;
    font-size: 18px;
}

.dog-login {
    width: 32px;
    height: 32px;
}

.btn-login {
    width: 140px;
    height: 50px;
    background-color: #09BBB5;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 100px;
}
</style>