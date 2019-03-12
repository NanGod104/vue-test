<template>
  <Child :message="msg" @send="send"></Child>
</template>

<script>
  import Child from './Child';
  export default {
    name: "Parent",
    data(){
      return {
        msg:"I am msg"
      }
    },
    components: {
      Child
    },
    methods:{
      send(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>
