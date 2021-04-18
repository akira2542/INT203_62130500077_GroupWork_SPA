<template lang="html">
  <div>
    <div>
      <h3 class="font-bold text-xl">
        Total Saved Jokes :
        <span class="text-green-400">
          {{ this.savedjokes.length }}
        </span>
      </h3>
    </div>
    <jokes-table :jokes="savedjokes">
      <template v-slot:thead>
        <th></th>
        <th></th>
      </template>
      <template v-slot:tdata="{ joke }">
        <td>
          <base-button bg="bg-yellow-500" @click="editJoke(joke.id)"
            >Edit</base-button
          >
        </td>
        <td>
          <base-button bg="bg-red-500" @click="deleteJoke(joke.id)"
            >Delete</base-button
          >
        </td>
      </template>
    </jokes-table>
    <div class="flex justify-center">
      <router-link to="/new-jokes">
        <base-button>Get some new Jokes!</base-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import JokesTable from '@/components/JokesTable'
export default {
  components: {
    JokesTable,
  },
  data() {
    return {
      savedjokes: [],
    }
  },
  created() {
    this.refreshSaved()
  },
  mounted() {
    this.$emit('changebg', 'bg-red-200')
  },
  methods: {
    async fetchSavedJokes() {
      const { data } = await this.getFromBackend('jokes')
      return data
    },
    async refreshSaved() {
      this.savedjokes = await this.fetchSavedJokes()
    },
    async deleteJoke(id) {
      const res = await this.deleteInBackend(`jokes/${id}`)
      if (res.status === 200) {
        this.$emit('toast', `joked deleted`, 'success')
        this.refreshSaved()
      }
    },
    async editJoke(id) {
      this.$router.push(`/edit/${id}`)
    },
  },
}
</script>
<style lang=""></style>
