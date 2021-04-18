<template lang="html">
  <base-card>
    <h1 class="text-3xl">WELCOME TO DADJOKES NOTES</h1>
    <h3 class="mt-5">
      You can find you dad jokes of your liking from
      <a
        class="font-bold text-blue-500"
        href="https://github.com/KegenGuyll/DadJokes_API"
        >Dad Jokes API</a
      ><br />
      and saved to our databases! if you dont like the original you can edit
      your saved joke too!
    </h3>
    <div class="flex justify-center">
      <base-card bg="bg-gray-600 text-white p-3 m-5">
        <h3 class="font-bold">Definitions</h3>
        <h4><span class="font-bold">type : </span>type of jokes</h4>
        <h4>
          <span class="font-bold">Setup : </span>the part of the jokes where you
          set up context for the jokes
        </h4>
        <h4>
          <span class="font-bold">Puchline : </span>the part of the jokes that
          should be deliver after the setup and where people should be laughing
          at
        </h4>
      </base-card>
    </div>
    <router-link to="/new-jokes">
      <base-button>Find New Jokes !</base-button>
    </router-link>
  </base-card>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  async mounted() {},
}
</script>
