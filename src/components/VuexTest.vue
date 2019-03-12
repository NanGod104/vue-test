<template>
  <div class="hello">
    <button @click="changeT"></button>
    <p v-show="this.leftNavState">dfsdfsdfsdfsdfsafdsfas</p>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'HelloWorld',

    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters([
        "leftNavState"
      ])
    },
    methods: {
      changeT() {
        this.changeLeftState(false)
      },
      ...mapActions([
        "changeLeftState"
      ])
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
