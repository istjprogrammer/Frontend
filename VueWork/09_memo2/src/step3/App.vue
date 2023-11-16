<template>
    <div>
        <h1>컴포넌트를 이용한 메모장</h1>
    </div>
    <hr>

    <div id="app">
        <list-page :list="list" :setReadMemo="setReadMemo" v-if="mode=='list'"></list-page>
        <read-page :current-memo="selectedMemo" v-if="mode=='read'"></read-page>
    </div>  
</template>

<script>
import ListPage from "./pages/ListPage"
import ReadPage from "./pages/ReadPage"

const MODE = {
  LIST : "list",
  READ : "read"
}

export default {
  components:{
    ListPage,
    ReadPage
  },
  data(){
    return {
      list : ["memo1", "memo2", "memo3"],
      selectedMemo : "",
      mode : MODE.LIST
      }
  },
  methods : {
    setReadMemo(index){
      this.selectedMemo = this.list[index]
      console.log(this.selectedMemo, index)
      this.mode = MODE.READ
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