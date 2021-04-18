<template lang="html">
  <div
    class="shadow p-3 m-2 font-bold text-white rounded-3xl notification"
    :class="[isOn ? 'on' : 'off', color[type]]"
  >
    {{ msg }}
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'this is a toast',
    },
    isOn: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'success',
    },
  },
  data() {
    return {
      color: {
        success: 'bg-green-500',
        error: 'bg-red-500',
      },
    }
  },
}
</script>
<style>
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOutBottom {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(2rem);
  }
}
.notification {
  min-width: 15rem;
  position: absolute;
  bottom: 2rem;
}
.on {
  animation: fadeInBottom 1s;
}
.off {
  animation: fadeOutBottom 1s forwards;
}
</style>
