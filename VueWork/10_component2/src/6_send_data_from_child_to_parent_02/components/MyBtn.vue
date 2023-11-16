<template>
    <div class="btn">
       <slot></slot>
    </div>
    <!--실제 이벤트는 여기서 일어난다.-->
    <h1 @click="$emit('myclick', $event)">TEST</h1>
    <input type="text" v-model="msg"/>
</template>

<script>
    export default {
        emits: ["myclick", "changeMsg"],
        data(){
            return {msg : ""}
        },
        watch:{
            msg(){
                this.$emit('changeMsg', this.msg)
            }
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