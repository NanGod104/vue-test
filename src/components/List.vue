<template>
 <div id="question-list">
   <router-link class="list-item" to="/VuexTest">Vuex练习</router-link>
   <router-link class="list-item" to="/Parent">Vuex练习</router-link>
 </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style lang="scss" scoped>
#question-list{
  .list-item{
    display: block;
  }
}
</style>
