<template>
  <div>
    <Child ref="child"></Child>
    <button  v-on:click="child_method">触发子组件方法</button>
  </div>

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
      child_method(){
        this.$refs.child.childConsole()
      },
      parentConsole(){
        console.log("I am parent method")
      }
    }
  }
</script>

<style scoped>

</style>
