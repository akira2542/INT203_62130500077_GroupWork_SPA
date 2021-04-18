<template>
  <h1 class="text-5xl m-5 pt-5">Dadjokes Notes!</h1>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/new-jokes">Find New Jokes</router-link>|
    <router-link to="/saved-jokes">Saved Jokes</router-link>
  </div>
  <div class="flex justify-center">
    <div class="container">
      <router-view @toast="showToast" />
    </div>
  </div>
  <div class="flex justify-center w-screen">
    <notification
      v-if="toast.onload"
      :msg="toast.msg"
      :isOn="toast.isOn"
      :type="toast.type"
    ></notification>
  </div>
</template>
<script>
import Notification from '@/components/core/Notification.vue'
export default {
  components: {
    Notification,
  },
  data() {
    return {
      toast: {
        onload: false,
        isOn: false,
        msg: '',
        type: 'success',
      },
    }
  },
  methods: {
    showToast(msg, type) {
      if (!this.toast.onload) {
        this.toast.onload = true
      }
      this.toast.isOn = true
      this.toast.msg = msg
      this.toast.type = type
      setTimeout(() => {
        this.toast.isOn = false
      }, 2000)
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: darkgray;
  padding: 5px;
}

#nav a.router-link-exact-active {
  color: lime;
}
</style>
