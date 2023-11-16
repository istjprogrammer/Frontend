<template>
    <div>
        <h1>컴퍼넌트를 이용한 메모장</h1>
    </div>
    <hr>
    <div id="app">
        <list-page :list="list" :setReadMemo="setReadMemo" :setMode="setMode" v-if="mode == MODE.LIST"></list-page>
        <read-page :current-memo="selectedMemo" :setMode="setMode" v-if="mode == MODE.READ"></read-page>
        <write-page :setMode="setMode" :add-memo="addMemo" v-if="mode==MODE.WRITE"></write-page>
    </div>
</template>

<script>
    import ListPage from './pages/ListPage'
    import ReadPage from './pages/ReadPage'
    import WritePage from './pages/WritePage'
    import {MODE} from "./common";

    export default {
        components:{
            ListPage,
            ReadPage,
            WritePage
        },
        data(){
            return { 
                list : ["memo1", "memo2", "memo3"],
                selectedMemo : "",
                mode : MODE.LIST
            }
        },
        methods : {
            setReadMemo(index){
                this.selectedMemo = this.list[index];
                console.log(this.selectedMemo, index)
                this.mode = MODE.READ
            },
            setMode(mode){
                this.mode = mode;
            },
            addMemo(memo){
                this.list.push(memo)
            }
        },
        computed : {
            MODE(){
                return MODE;
            }
        }
    }
</script>

<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>