<template>
  <div>
    <h1>Events #{{ getEventId }}</h1>
  </div>
</template>


<script>
export default{
  head() {     // head() is a property used by vue-meta.
    return ({
      title: "Event #"+this.getEventId,
      meta: [{
        hid: 'Description',
        name: 'Description',
        content: 'This is event #'+this.getEventId
      }]
    })
  },
  computed: {
    getEventId() {
        return this.$route.params.id
    }
  }
}</script>
<style>

</style>