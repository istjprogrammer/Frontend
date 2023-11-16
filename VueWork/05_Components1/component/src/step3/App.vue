<template>
  <h1>로컬 컴포넌트</h1>
  <hr/>
  <div id = "app">
    <list-page :list="list"></list-page>
    {{list}}
  </div>
</template>

<script>
/*지역 컴포넌트 사용*/
  import ListPage from "./components/ListPage";
  export default {
    components:{
      ListPage
    },
    data(){
      return {
        list:["memo1", "memo2", "memo3", "memo4"]
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>