<template>
  <h1>메모 추가</h1>
  <p><button @click="addMemo()">메모 추가</button></p>
  <list-component :list="list" 
  :setSelectedMemo="setSelectedMemo"
  :selectedIndex="selectedIndex"></list-component>
  <view-component :memo="selectedMemo"></view-component>
</template>

<script>
  import ListComponent from './components/ListComponent';
  import ViewComponent from './components/ViewComponent';

  export default {
    name: 'App',

    components: {
      ListComponent,
      ViewComponent
    },
    data() {
      return {
        list : ["memo1", "memo2"],
        selectedMemo : "",
        selectedIndex : 0
      }
    },
    methods : {
      addMemo() {
        this.list.push("memo" + (this.list.length + 1))
      },
      setSelectedMemo(index){
        this.selectedIndex = index;
        this.selectedMemo = this.list[index];
        console.log("setSelectedMemo():" + index)
      }
    },
    created() {
      this.setSelectedMemo(0)
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