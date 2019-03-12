<template>
  <div id="child">
    <button @click="parent_method">触发父组件的方法</button>
  </div>
</template>

<script>
  export default {
    name: "Child",
    props: {
      message:String,
    },
    methods:{
      childConsole(){
        console.log("I am child method")
      },
      parent_method(){
        this.$parent.parentConsole()
      }

    }
  }
</script>

<style scoped>

</style>
