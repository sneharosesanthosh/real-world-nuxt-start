<template>
  <div>
    <h1>Create an Event</h1>
  </div>
</template>

<script>
export default{
  head() {     // head() is a property used by vue-meta.
    return ({
      title: "Create an Event",
      meta: [{
        hid: 'Description',
        name: 'Description',
        content: 'Create an event to be conducted by everyone'
      }]
    })
  }
}</script>