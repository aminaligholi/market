<template>
<div class="container">
    <div class="row justify-content-center" id="d5">
        <div class=" col-4 align-self-center">
            <div class="text-center ">
                <h1> صفحه یافت نشد </h1>
                <nuxt-link to="/" class=" text-info"> <span id="backlink"> برگشت به سایت </span> </nuxt-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
;
export default {

    head: {
        title: 'page not find'
    }

}
</script>

<style scoped>
@import url('~assets/css/error_style/error.css');
</style>
