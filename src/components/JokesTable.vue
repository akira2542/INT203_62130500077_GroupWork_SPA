<template lang="html">
  <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
    <thead>
      <tr class="text-left border-b-2 border-gray-300">
        <th class="px-4 py-3">Type</th>
        <th class="px-4 py-3">Setup</th>
        <th class="px-4 py-3">Puchline</th>
        <slot name="thead"></slot>
      </tr>
    </thead>
    <tbody v-for="joke in jokes" :key="joke.id">
      <tr class="text-left bg-gray-100 border-b border-gray-200">
        <td class="px-4 py-3">{{ joke.type }}</td>
        <td class="px-4 py-3">{{ joke.setup }}</td>
        <td class="px-4 py-3">{{ joke.punchline }}</td>
        <slot name="tdata" :joke="joke"></slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    jokes: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang=""></style>
