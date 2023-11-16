<template>
    <div class="header">
    <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type : String,
                default : ""
            }
        }
    }
</script>

<style>
    .header{
        height: 50px;
        background-color: green;
    }
</style>