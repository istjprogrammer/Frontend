<template>
	<div class="parent">
	  Parent 컴포넌트
    <child-component :list="list" ref="childComponent2"></child-component>
  </div>
</template>

<script>
	import ChildComponent from "./ChildComponent";

  export default {
	  name:"parent",

    data() {
      return {
        count : 1
      }
    },

    components:{
      ChildComponent
    },

    methods : {
      addCount() {
        this.count++;
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