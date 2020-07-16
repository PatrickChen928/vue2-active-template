export default `<template>
    <div>
        <h1>{{num}}</h1>
        <button @click="addNum">增加</button>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                num: 0 
            }
        },
        methods: {
            addNum() {
                this.num++;
            }
        }
    }
</script>

<style>
    h1 {
        font-size: 40px;
        color: red;
    }
    button {
        width: 100px;
        line-height: 32px;
        font-size: 14px;
        color: #fff;
        background: #4e6ef2;
        border-radius: 4px;
        border: none;
    }
</style>
`