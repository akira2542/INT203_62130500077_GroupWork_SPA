<template lang="html">
  <button
    class="btn shadow p-2 m-2 font-bold text-white rounded-md"
    :class="bg"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    bg: {
      type: String,
      default: 'bg-blue-500',
    },
  },
}
</script>
<style lang=""></style>
