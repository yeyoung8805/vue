<template>
  <div>
    <ul>
      <li><router-link to="/">Main</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() { //data() {} 와 동일
    return {

    }
  }
}
</script>
