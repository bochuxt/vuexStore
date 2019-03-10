<template>
  <div class="hello">

    <div class="left">
:::: {{title}}

      <ul>
        <li v-for="(link, index) in links">

          {{link}}
        </li>

      </ul>
    </div>



    <div class="right">
      <stats></stats>

    </div>
    <h1>{{ msg }}</h1>

    <h3>Installed CLI Plugins</h3>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Stats from '@/component/Stats.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {

    ...mapState([
            'title',
            'links'
    ]),
    //other

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
