<template>
    <div class="sample" @click="addCount">
        샘플 카운트 출력 : {{ count }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count : 1
            }
        },
        methods : {
            addCount() {
                this.count++
            },
            getCount1() {
                return this.count
            }
        }
    }
</script>

<style scoped>
    .sample {
        border : 1px solid black;
        margin : 10px;
    }
</style>