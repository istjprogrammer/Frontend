<template>
	<div class="parent">
	  Parent 컴포넌트   
    <div>
	    <button @click="addMemo">부모에서 자식으로 데이터 보내기</button>
    </div>
    <child-component :list="list"></child-component>
  </div>
</template>

<script>
	import ChildComponent from "./ChildComponent";

  export default {
	  name:"parent",
    data(){ return { list:["memo1", "memo2"] } },
    components:{ ChildComponent },
    methods : {
      addMemo(){
        this.list.push("memo" + (this.list.length + 1));
      }
    }
  }
</script>

<style scoped>
    .parent {
        border:1px solid #000000;
        margin:10px;
    }
</style>