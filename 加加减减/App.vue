<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        {{item}} <button @click="del(index)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      arr:[1,5,3]
    }
  },
  methods:{
    add(){
      this.arr.push(Math.ceil(Math.random()*10))
    },
    del(index){
      this.arr.splice(index,1)
    }
  }
}
</script>

<style>

</style>
