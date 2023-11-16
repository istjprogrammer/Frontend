<template>
	<div class="child">
	  선택된 메모 : {{memo}}
	</div>
</template>

<script>
	export default {
	  name:"child",
    data(){ return {} },
    props:["memo"]
  }
</script>

<style scoped>
    .child {
        border:1px solid #000000;
        margin:10px;
    }
</style>