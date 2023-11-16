<template>
    <div>
        <header-component title="Step3"></header-component>
        <div>
            <h1>읽기 페이지</h1>
            <ul>
             <p>선택된 메모 : {{currentMemo}}</p>
            </ul>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
export default {
    props : {
        currentMemo:{
            type : String,
            default : ""
        }
    }
}
</script>

<style>

</style>