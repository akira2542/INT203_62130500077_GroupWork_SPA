export default {
  data() {
    return {
      API_URI: 'http://localhost:5000',
    }
  },
  methods: {
    async getJSON(api) {
      const config = { headers: { accept: 'application/json' } }
      try {
        return await this.axios.get(api, config)
      } catch (e) {
        console.error(e)
      }
    },
    async getFromBackend(api) {
      try {
        return await this.axios.get(`${this.API_URI}/${api}`)
      } catch (e) {
        console.error(e)
      }
    },
    async postToBackend(api, payload) {
      try {
        return await this.axios.post(`${this.API_URI}/${api}`, payload)
      } catch (e) {
        console.error(e)
      }
    },
    async putToBackend(api, payload) {
      try {
        return await this.axios.put(`${this.API_URI}/${api}`, payload)
      } catch (e) {
        console.error(e)
      }
    },
    async deleteInBackend(api) {
      try {
        return await this.axios.delete(`${this.API_URI}/${api}`)
      } catch (e) {
        console.error(e)
      }
    },
  },
}
