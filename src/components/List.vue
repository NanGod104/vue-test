<template>
 <div id="question-list">
   <router-link class="list-item" to="/VuexTest">Vuex练习</router-link>
   <router-link class="list-item" to="/Parent">父子组件传值</router-link>
   <router-link class="list-item" to="/Parent1">父子组件方法调用</router-link>
   <router-link class="list-item" to="/Instruction">各种指令v-</router-link>
   <router-link class="list-item" to="/ElementUITable">ElementUI_table</router-link>
   <router-link class="list-item" to="/ElementUITable1">ElementUI_table1</router-link>
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
