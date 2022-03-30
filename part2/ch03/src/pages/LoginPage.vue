<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login"> <!-- prevent 가 없으면 화면이 전체가 로딩된다. -->
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '', //v-model 에 들어있는 값 email
      password: '' //v-model 에 들어있는 값 password
    }
  },
  methods: {
    login() {
      console.log(this.email) //this 가 필수적으로 있어야 한다.
      console.log(this.password)
      if (this.email === 'yyk8805@naver.com' && this.password === '123456') {
        localStorage.setItem('token', '1234567890')
        localStorage.setItem('email', this.email)
        alert('login success')
        this.$router.push('/') //location href 대신에 사용하는 것이 좋다. 화면전환 일어나지 않으므로.
      } else {
        alert('Wrong email or password')
      }
    }
  }
}
</script>
