import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue"; //뒤에 .vue 는 생략가능
import LoginPage from "@/pages/LoginPage"; // 절대 경로 @는 src를 의미 => 지금은 ../ 로도 바꿔줄 수 있다.
import ProfilePage from "@/pages/ProfilePage";

const routes = [
  { path: "/", component: MainPage },
  { path: '/login', component: LoginPage },
  {
    path: '/profile',
    component: ProfilePage,
    beforeEnter: (to, from, next) => { //내비게이션 가드. vue의 생명주기 이용했다.
      if (localStorage.getItem('token')) {
        next();
      } else {
        next('/login');
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
