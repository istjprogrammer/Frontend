<template>
	<div class="child">
	  Child 컴포넌트
        <div>
            <p>data.count =  {{count}}</p>
            <p>props.prop =  {{prop}}</p>
        </div>

	    <div>
		  <button @click="count++"> data 변경</button>
		</div>
	</div>
</template>

<script>
	export default {
	  name:"child",
    data(){ return { count:1 } },
	  props:["prop"],
    beforeCreate() { console.log("\t2. beforeCreate ", this.$options.name); },
    created(){ console.log("\t2. created ", this.$options.name); },
    beforeMount() { console.log("\t2. beforeMount ", this.$options.name); },
    mounted(){ console.log("\t2. mounted ", this.$options.name); },
    beforeUpdate(){ console.log("\t2. beforeUpdate ", this.$options.name); },
    updated(){ console.log("\t2. updated ", this.$options.name); },
    beforeDestroy() { console.log("\t2. beforeDestroy ", this.$options.name); },
    destroyed() { console.log("\t2. destroyed ", this.$options.name); }
  }
</script>

<style scoped>
    .child {
        border:1px solid #000000;
        margin:10px;
    }
</style>