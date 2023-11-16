<template>
    <div>
        <header-component title="Step3"></header-component>
        <div id="listpage">
            <h1>리스트 페이지</h1>
            <ul>
                <li v-for="(memo, index) in list" :key="index" @click="setReadMemo(index)">{{index}}. {{memo}}</li>
            </ul>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
export default {
    props :{
        list : {
            type : Array,
            default : []
        },
        setReadMemo : {
            type:Function
        }
    }
}
</script>

<style>
    .headercomponent{
        text-align: center;
    }
    .listpage{
        text-align: center;
    }
    .footercomponent{
        text-align: center;
    }
</style>