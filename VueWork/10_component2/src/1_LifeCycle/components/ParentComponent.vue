<template>
	<div class="parent">
	  Parent 컴포넌트
    <div>
	    <p>data.count =  {{count}}</p>
      <p>props.prop =  {{prop}}</p>
    </div>
    <div>
	    <button @click="count++"> data 변경</button>
      <button @click="prop++"> props 변경</button>
    </div>
    <child-component :prop="prop"></child-component>
  </div>
</template>

<script>
	import ChildComponent from "./ChildComponent";

  export default {
	  name:"parent",
    data(){ return { count:1, prop:1 } },
    components:{ ChildComponent },
    beforeCreate() {
	    console.log("1. beforeCreate ", this.$options.name);
    },
    created(){ console.log("1. created ", this.$options.name); },
    beforeMount() {
	    console.log("1. beforeMount ", this.$options.name);
    },
    mounted(){ console.log("1. mounted ", this.$options.name); },
    beforeUpdate(){
	    console.log("1. beforeUpdate ", this.$options.name);
    },
    updated(){ console.log("1. updated ", this.$options.name); },
    beforeDestroy() {
	    console.log("1. beforeDestroy ", this.$options.name);
    },
    destroyed() { console.log("1. destroyed ", this.$options.name); }
  }
</script>

<style scoped>
    .parent {
        border:1px solid #000000;
        margin:10px;
    }
</style>