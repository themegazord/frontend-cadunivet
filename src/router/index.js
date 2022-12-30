import Vue from "vue";
import VueRouter from "vue-router";
import cadastroClientes from "@/views/cadastro-clientes/CadastroClientes.vue";
import cadastroEmpresa from "@/views/cadastro-empresa/CadastroEmpresa.vue";
import homePage from "@/views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: homePage
    },
    {
        path: "/cadastro/clientes",
        name: "cadastro-clientes",
        component: cadastroClientes,
    },
    {
        path: "/cadastro/empresa",
        name: "cadastro-empresa",
        component: cadastroEmpresa
    },
    
];

const router = new VueRouter({
    routes
});

export default router;
