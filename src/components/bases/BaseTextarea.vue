<template lang="html">
  <textarea
    class="border border-gray-500 shadow p-1"
    :class="[width, height]"
    :value="modelValue"
    :type="type"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  props: ['modelValue', 'type', 'width', 'height'],
}
</script>
<style lang=""></style>
