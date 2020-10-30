<template>
<div >
    <slider></slider>
    <category></category>
    <button @click="abc()">hi</button>
</div>
</template>

<script>
export default {
methods:{
    abc(){
        console.log(this.$route)
    }
}
}
</script>

<style>

</style>
