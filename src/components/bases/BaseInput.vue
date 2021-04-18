<template lang="html">
  <input
    class="border border-gray-500 shadow p-1"
    :class="width"
    :value="modelValue"
    :type="type"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  props: ['modelValue', 'type', 'width'],
}
</script>
<style lang=""></style>
