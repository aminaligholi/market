<template>
<div class="d3 row mr-4" v-show="show_item">
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-withe border-left">
            <nuxt-link to="/product">محصولات</nuxt-link>
        </button>
        <!--<button type="button" class="btn btn-withe border-left">Middle</button>-->
        <button type="button" class="btn btn-withe border-left">
            <nuxt-link to="/152">پیشنهادات روز</nuxt-link>
        </button>
        <button type="button" class="btn btn-withe border-left">
            <nuxt-link to="/152">بومیروگردشگری</nuxt-link>
        </button>
    </div>

</div>
</template>

<script>
export default {
    props: ['show_item']

}
</script>

<style scoped>
.d3 {
    height: 55px;
    border-bottom: 1px solid rgb(30, 223, 223);
    font-family: 'Vazir';
}
</style>
