<template>
  <div>
    <h1>Events</h1>
    <EventCard v-for="(event, index) in events" :key="index" :event="event"/>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard.vue'
export default {
  async asyncData(context) {
    try { 
      const {data} = await context.$axios.get('http://localhost:3000/events')
      return {
        events: data,
      }
    }
    catch(e) {
      error({
            statusCode: 503,
            message: "Unable to fetch events data at this time.Please try again later."
          })
    }
   
  },
  head() {
    // head() is a property used by vue-meta.
    return {
      title: 'Event Listing',
      meta: [
        {
          hid: 'Description',
          name: 'Description',
          content: 'These are the events taking place in the neighbourhood',
        },
      ],
    }
  },
  components: {
    EventCard,
  },
}
</script>
<style>
</style>
