<template lang="html">
  <div>
    <div>
      <label class="pr-3">how many jokes you want to find?</label>
      <base-input type="number" v-model="quantity" width="w-12" />
    </div>
    <jokes-table :jokes="jokes">
      <template v-slot:thead>
        <th>
          <base-button @click="random()">Random</base-button>
        </th>
      </template>
      <template v-slot:tdata="{ joke }">
        <td>
          <base-button bg="bg-green-500" @click="save(joke)">Save</base-button>
        </td>
      </template>
    </jokes-table>
    <div class="flex justify-center">
      <router-link to="/saved-jokes">
        <base-button>View Saved Jokes</base-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import JokesTable from '@/components/JokesTable.vue'
export default {
  components: {
    JokesTable,
  },
  data() {
    return {
      quantity: 5,
      jokes: [],
    }
  },
  async created() {
    this.jokes = await this.fetchDadjokes()
  },
  mounted() {
    this.$emit('changebg', 'bg-green-100')
  },
  methods: {
    async fetchDadjokes() {
      const res = await this.getJSON(
        `https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/${this.quantity}`
      )
      if (res.status === 200) {
        return res.data
      } else {
        this.$emit('toast', `something went wrong`, 'error')
      }
    },
    async random() {
      this.jokes = await this.fetchDadjokes()
      this.$emit('toast', `randomed ${this.quantity} new jokes`, 'success')
    },
    async save(joke) {
      const res = await this.postToBackend('jokes', joke)
      if (res.status === 201) {
        this.jokes.splice(this.jokes.indexOf(joke), 1)
        this.$emit('toast', `joked saved`, 'success')
      } else {
        this.$emit('toast', `something went wrong`, 'error')
      }
    },
  },
}
</script>
<style lang=""></style>
