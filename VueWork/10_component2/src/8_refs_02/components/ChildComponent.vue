<template>
	<div class="child">
	  Child 컴포넌트
	  	<div>
	    	입력 값 = <input type="text" ref="childInput" v-model="value" />
    	</div>
	</div>
</template>

<script>
	export default {
        
	  name:"child",

    data(){
		return {
			value : "sample"
		}
	}
  }
</script>

<style scoped>
    .child {
        border:1px solid #000000;
        margin:10px;
    }
</style>