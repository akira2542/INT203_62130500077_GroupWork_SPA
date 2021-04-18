<template lang="html">
  <div class="w-12/12 pt-5 pb-5 rounded-md shadow" :class="bg">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    bg: {
      type: String,
      default: 'bg-gray-100',
    },
  },
}
</script>
<style lang=""></style>
