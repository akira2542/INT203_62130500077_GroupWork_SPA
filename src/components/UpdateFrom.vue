<template lang="html">
  <base-card>
    <h1 class="text-xl">Edit Your Jokes</h1>
    <p class="">jokes id : {{ this.$route.params.id }}</p>
    <div class="px-8 pt-3 pb-8 mb-4 flex flex-col items-center">
      <div class="mb-4 flex flex-col w-6/12">
        <label class="font-bold mr-3 text-left" for="type">Type</label>
        <base-textarea
          data-gramm_editor="false"
          type="textarea"
          name="type"
          v-model="joke.type"
        />
      </div>
      <div class="mb-4 flex flex-col w-6/12">
        <label class="font-bold mr-3 text-left" for="jokes">Jokes</label>
        <base-textarea
          data-gramm_editor="false"
          class="border border-black"
          type="textarea"
          name="jokes"
          v-model="joke.setup"
        />
      </div>
      <div class="mb-4 flex flex-col w-6/12">
        <label class="font-bold mr-3 text-left" for="punchline"
          >Punchline</label
        >
        <base-textarea
          data-gramm_editor="false"
          class="border border-black"
          type="textarea"
          name="punchline"
          v-model="joke.punchline"
        />
      </div>
      <div class="mb-4">
        <base-button @click="saveData(joke)">Submit</base-button>
        <base-button bg="bg-red-500" @click="cancel()">Cancel</base-button>
      </div>
    </div>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      joke: {},
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data } = await this.getFromBackend(
        `jokes/${this.$route.params.id}`
      )
      if (data) {
        this.joke = data
      }
    },
    async saveData(payload) {
      const res = await this.putToBackend(
        `jokes/${this.$route.params.id}`,
        payload
      )
      if (res.status === 200) {
        this.$emit('toast', `joke updated`, 'success')
        this.$router.push('/saved-jokes')
      } else {
        this.$emit('toast', `joke updated unsuccessfully`, 'error')
      }
    },
    cancel() {
      this.$router.push('/saved-jokes')
    },
  },
}
</script>
<style lang=""></style>
