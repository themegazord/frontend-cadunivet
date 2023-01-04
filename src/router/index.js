import Vue from "vue";
import VueRouter from "vue-router";
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
    
    
];

const router = new VueRouter({
  routes
});

export default router;
