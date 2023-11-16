<template>
    <div>
        <h1>컴포넌트를 이용한 메모장</h1>
    </div>
    <hr>

    <div id="app">
        <list-page></list-page>
    </div>  
</template>

<script>
import ListPage from "./pages/ListPage"

export default {
  component:{
    ListPage
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