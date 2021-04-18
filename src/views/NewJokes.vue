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
        this.$emit('toast', `joked saved`, 'success')
      } else {
        this.$emit('toast', `something went wrong`, 'error')
      }
    },
  },
}
</script>
<style lang=""></style>
