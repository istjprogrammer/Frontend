<template>
  <h1>로컬 컴포넌트</h1>
  <hr/>
  <list-page></list-page>
</template>

<script>
  /*전역 컴포넌트 사용*/
  // import ListPage from "./components/ListPage";
  export default {
    components:{
      // ListPage
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