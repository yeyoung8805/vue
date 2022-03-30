import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import MainPage from "./pages/MainPage.vue"; //뒤에 .vue 는 생략가능
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: "/", component: MainPage },
    { path: "/login", component: LoginPage },
    { path: "/profile", component: ProfilePage }
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
