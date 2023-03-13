<template>
  <div>
    <h1>Events</h1>
    <EventCard v-for="(event, index) in events" :key="index" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  async fetch({store,error}) {
    try {
      await store.dispatch('event/fetchEvents')
    } 
    catch (e) {
      error({
        statusCode: 503,
        message:
          'Unable to fetch events data at this time.Please try again later.',
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
  computed: {
    ...mapState({
      events: (state) => state.event.events,
    }),
  },
}
</script>
<style>
</style>
