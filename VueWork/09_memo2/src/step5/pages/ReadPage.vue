<template>
    <div>
        <header-component title="Step5"></header-component>
        <div>
            <h1>읽기 페이지</h1>
            <ul>
             <p>선택된 메모 : {{currentMemo}}</p>
            </ul>
        </div>
        <div>
            <button @click="setMode(MODE.LIST)">리스트 페이지로 이동</button>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>

import {MODE} from "../common"

export default {
    props : {
        currentMemo:{
            type : String,
            default : ""
        },
        setMode : {
            type : Function,
            default : ()=>{
                console.log("TEST")
            }
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

</style>