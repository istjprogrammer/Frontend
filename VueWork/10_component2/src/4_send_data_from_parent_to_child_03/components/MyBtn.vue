<template>
    <div class="btn">
        <slot name="icon"></slot>
        <slot name="text"></slot>
    </div>
    <!--
    <h1 :class="$attrs.class"
        :style="$attrs.style">test</h1>
    -->
    <!--한번에 속성을 다 상속받게 하고자 할 때-->
    <!--<h1 v-bind="$attrs">test</h1>-->
</template>

<script>
    export default {
        //inheritAttrs:false,
        created(){
            console.log(this.$attrs)
        }
    }
</script>
<style scoped>
.btn {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: gray;
  color: white;
  cursor: pointer;
}
</style>