new Vue({
  el: '#app',
  data: {
    list: []
  },
  async created() {
    const { data } = await axios({url: '../data.json'})
    this.list = data.data
  }
})