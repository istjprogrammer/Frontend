<template>
	<div class="child">
	  Child 컴포넌트
      <div>
        <ul>
          <li v-for="(memo, index) in list" :key="index">{{index}}.{{memo}}</li>
        </ul>
      </div>
	    <div>
		    <button @click="count++"> 부모로 데이터 보내기</button>
		  </div>
	</div>
</template>

<script>
	export default {
	  name:"child",
    data(){ return {} },
	  props:["list"]
  }
</script>

<style scoped>
    .child {
        border:1px solid #000000;
        margin:10px;
    }
</style>