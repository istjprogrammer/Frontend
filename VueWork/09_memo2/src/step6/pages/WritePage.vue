<template>
    <div>
        <header-component title="글 쓰기 페이지"></header-component>
        <div>
            <textarea v-model="memo"></textarea>    
            <div>
                <button @click="setMode(MODE.LIST)">취소</button>
                <button @click="onAddMemo">저장</button>
            </div>           
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import {MODE} from "../common"
export default {
    data(){
        return{ memo : "" }
    },
    props :{
        setMode:{
            type : Function,
            default : ()=>{
                console.log("TEST")
            }
        },
        addMemo:{
            type : Function
        }
    },
    computed : {
        MODE(){
            return MODE;
        }
    },
    methods : {
        onAddMemo(){
            this.addMemo(this.memo)
            this.setMode(MODE.LIST)
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