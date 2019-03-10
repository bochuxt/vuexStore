<template>
  <div class="hello">

      <div>
          <table class="table table-striped">
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="coin in coins" :key="coin.id">
                  <td>{{ coin.id }}</td>
                  <td>{{ coin.name }}</td>
                  <td>{{ coin.price }}</td>
              </tr>
              </tbody>
          </table>

      </div>

    <div class="left">

      <form @submit.prevent="addLink">
        <input class="link-input" type="text" placeholder=" add link" v-model="newLink"/>
      </form>

      <ul>
        <li v-for="(link, index) in links">

          <div>{{link}}</div>
          <button v-on:click="removeLinks(index)" class="rm">Remove</button>
        </li>

      </ul>
    </div>



    <div class="right">
      <stats></stats>

    </div>


  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Stats from "@/components/Stats.vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      newLink:''
    }
  },
  components:{
    Stats
  },
  computed: {

    ...mapState([
            'title',
            'links',
        'coins'
        // computed: mapState(['coins']),
    ]),
    //other

  },
    mounted(){
      this.$store.dispatch('loadCoins')
    },
  methods:{
    ...mapMutations([
            'ADD_LINK'
    ]),
    ...mapActions([
            'removeLink'
    ]),
    addLink: function () {
      this.ADD_LINK(this.newLink)
      this.newLink=""
    },
    removeLinks: function (link) {
      this.removeLink(link)
      
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
