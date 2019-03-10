<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>HI: {{name}}</div>
  </div>
</template>
<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'about',
    data(){
      return {
        name:"about jeremy"
      }
    },
    components: {
      // HelloWorld
    }
  }
</script>