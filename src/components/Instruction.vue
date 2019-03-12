<template>
  <div id="instruction">
    <!--v-text-->
    <p v-text="msg"></p>
    <!--v-html不常用，不会被vue编译，想使用css标签生效需要其他设置，很麻烦，不推荐使用-->
    <p v-html="Html"></p>
    <!--v-show-->
    <p v-show="isShow">这是一个v-show示例</p>
    <!--v-if v-else-if v-else-->
    <p v-if="type=='A'">这是v-if示例</p>
    <p v-else-if="type=='B'">这是v-else-if示例</p>
    <p v-else>这是v-else示例</p>
    <!--v-for-->
    <ul>
      <li v-for="(item,index) in forArr" :key="index">{{item.text}}+{{index}}</li>
    </ul>
    <!--v-on 缩写 @ 更多到官网看-->
    <button v-on:click="dothis">v-on</button>
    <button @click="dothis">v-on缩写</button>
    <!--v-bind 缩写 ：-->
    <img v-bind:src="imgSrc">
    <img :src="imgSrc">
    <!--v-model-->
    <input type="text" v-model="modelMsg" placeholder="这是v-model示例">
    <p>{{modelMsg}}</p>
    <!--v-pre 跳过编译-->
    <span v-pre>{{ 这个不会被编译 }}</span>
    <!--v-cloak这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。-->
    <span v-cloak>{{"不会显示，直到编译结束。"}}</span>
    <!--v-once只渲染一次，会被缓存起来 少用-->
    <span v-once>v-once单个组件</span>

  </div>
</template>


<script>
  import img from "../assets/test.jpg"
  export default {
    name: "V-something",
    data() {
      return {
        type:"A",
        msg: "这是一个v-text示例",
        Html:"<h1>这是一个v-html示例</h1>",
        isShow:true,
        forArr:[{text:"aaa"},{text:"bbb"},{text:"ccc"}],
        imgSrc:img,
        modelMsg:"",
        commonMsg:"通用的msg"
      }
    },
    methods:{
      dothis(){
        console.log("我被点击了")
      }
    },

  }
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  display: block;
  margin: 1vh auto;
}
[v-cloak] {
  display: none;
}
</style>
