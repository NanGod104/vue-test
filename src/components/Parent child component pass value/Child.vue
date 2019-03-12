<template>
  <div id="child">
    <p>{{message}}</p><!--父组件向子组件传值-->
    <button @click="tosend">send a message</button><!--子组件触发父组件方法传值-->
  </div>
</template>

<script>
  export default {
    name: "Child",
    props: {
      message:String,
    },
    methods:{
      tosend(){
        this.$emit("send","this a child message")
      }
    }
  }
</script>

<style scoped>

</style>
