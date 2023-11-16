<template>
    <div>
        <header-component title="Step5"></header-component>
        <div id="listpage">
            <h1>리스트 페이지</h1>
            <ul>
                <li v-for="(memo, index) in list" :key="index" @click="setReadMemo(index)">{{index}}. {{memo}}</li>
            </ul>
        </div>
        <div>
            <button @click="setMode(MODE.WRITE)">메모 추가</button>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import {MODE} from "../common"
export default {
    props :{
        list : {
            type : Array,
            default : []
        },
        setReadMemo : {
            type:Function
        },
        setMode:{
            type : Function,
            default : []
        }
    },
    computed : {
        MODE(){
            return MODE;
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