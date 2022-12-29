import Vue from "vue";
import VueRouter from "vue-router";
import cadastroUsuarios from "@/views/cadastro-usuarios/CadastroUsuarios.vue";
import cadastroEmpresa from "@/views/cadastro-empresa/CadastroEmpresa.vue";
import cadastro from "@/views/cadastro/Cadastro.vue";
import homePage from "@/views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: homePage
    },
    {
        path: "/cadastro",
        name: "cadastro-geral",
        component: cadastro
    },
    {
        path: "/cadastro/usuarios",
        name: "cadastro-usuarios",
        component: cadastroUsuarios,
    },
    {
        path: "/cadastro/empresa",
        name: "cadastro-empresa",
        component: cadastroEmpresa
    }
];

const router = new VueRouter({
    routes
});

export default router;
