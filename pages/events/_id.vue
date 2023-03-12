<template>
  <div>
    <h1>Events #{{ event.id }}</h1>
    <h3>Event: {{ event.title }}</h3>
  </div>
</template>


<script>
export default{
  head() {     // head() is a property used by vue-meta.
    return ({
      title: "Event "+this.event.title,
      meta: [{
        hid: 'Description',
        name: 'Description',
        content: 'This is event: '+this.event.title
      }]
    })
  },
  async asyncData({$axios,error,params}) {
    try {
      const {data} = await $axios.get("https://localhost:3000/events/"+params.id)
      return {
        event: data
      }
    }
    catch(e) {
      error({
        statusCod: 503,
        message: "Unable to fetch event #"+params.id
      })
    }
  },
  computed: {
    getEventId() {
        return this.$route.params.id
    }
  }
}</script>
<style>
</style>
