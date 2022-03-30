import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue"; //뒤에 .vue 는 생략가능
import LoginPage from "@/pages/LoginPage"; // 절대 경로 @는 src를 의미 => 지금은 ../ 로도 바꿔줄 수 있다.
import ProfilePage from "@/pages/ProfilePage";

const routes = [
  { path: "/", component: MainPage },
  { path: "/login", component: LoginPage },
  { path: "/profile", component: ProfilePage }
];

const router = new VueRouter({
  routes,
});

export default router;
