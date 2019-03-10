<template>
  <div class="stats">
   <h1> status :</h1>

      <p>
         there are {{ countLinks }} links
      </p>
      <p>{{msg}}</p>

      <button v-on:click="removeAllLinks">Remove all links</button>

  </div>
</template>

<script>
  import { mapGetters,mapMutations,mapActions } from 'vuex'

  export default {

  name: 'stats',
  data(){
      return {
          msg:" "
      }
  },

  computed: {

    ...mapGetters([
            'countLinks'
    ]),
    //other

  },
  methods:{
      ...mapMutations([
          'REMOVE_ALL'
      ]),
      ...mapActions([
          'removeAll'
      ]),
      removeAllLinks:function(){
          this.removeAll().then(()=>{
              console.log(" remove all success")
              this.msg=" removed..."
          })

      }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
