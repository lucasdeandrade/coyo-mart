<template>
  <button class="col-3 btn btn-outline-primary coyoButton" @click="this.$router.push( route )">{{ text }}</button>
</template>
  
<script>
  export default {
    name: 'coyoButton',
    props: {
      route: String,
      text: String,
    }
  }
</script>