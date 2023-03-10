<template>
  <div>
    <h1>Events</h1>
  </div>
</template>

<script>
export default{
  head() {     // head() is a property used by vue-meta.
    return ({
      title: "Event Listing",
      meta: [{
        hid: 'Description',
        name: 'Description',
        content: 'These are the events taking place in the neighbourhood'
      }]
    })
  }
}</script>