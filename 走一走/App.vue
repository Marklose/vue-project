<template>
  <div id="app">
    <ul>
      <li v-for="item in arr" :key="item">
        {{item}}
      </li>
    </ul>
    <button @click="change">走一走</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      arr:['帅哥','美女','程序猿']
    }
  },
  methods:{
    change(){
      this.arr.push(this.arr.shift())
    }
  }
}
</script>

<style>

</style>
