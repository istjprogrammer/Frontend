<template>
	<div class="parent">
	  Parent 컴포넌트   
    <div>
	    자식에게 받은 데이터 = {{selectedMemo}}
    </div>
    <child-component @select="onSelectedMemo"></child-component>
  </div>
</template>

<script>
	import ChildComponent from "./ChildComponent";

  export default {
	  name:"parent",
    data(){ return { selectedMemo : "" } },
    components:{ ChildComponent },
    methods : {
      onSelectedMemo(memo){
        this.selectedMemo =memo;
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