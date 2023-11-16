<template>
    <list-header></list-header>
    <div>
        <ul>
            <li v-for="memo in list" :key="memo">{{memo}}</li>
        </ul>
    </div>
    <list-footer></list-footer>
</template>

<script>
import ListHeader from "./ListHeader";
import ListFooter from "./ListFooter";
export default {
    components:{
        ListHeader,
        ListFooter
    },
    data(){
        //return { list : ["memo1", "memo2", "memo3"]}
    },
    props : {
        list : {
            type: Array,
            required:true
        }
    }
}
</script>

<style>

</style>