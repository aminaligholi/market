<template>
<div>
    <div @click="show_div=false" :class=" {animate__animated:true, 
     animate__slideInRight:show_div,
      animate__slideOutRight:!show_div }" id="show_div">
        <div class="text-center">
            <nuxt-link to="/">
                <img class="img mx-auto  mt-2" id="img1" src="@/assets/image/logo.svg">
            </nuxt-link>
        </div>
        <div>
            <ul class="list-group mt-4 p-0 ul1">
                <nuxt-link v-for=" (p,i) in list_pop" :key="i" :to="p[1]">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        {{p[0]}}
                    </li>
                </nuxt-link>
            </ul>
        </div>

    </div>
    <div class="dark_div" v-show="show_div" @click="show_div=false">
    </div>

    <div class="d1 container-fluid">
        <tophader :show_item="show_item" @show_item="show_item=$event">
            <button style='font-size:16px' class="mr-4 btn" @click="show_div=!show_div"><i class='fas fa-bars'></i></button>
        </tophader>
        <bottomhader :show_item="show_item"></bottomhader>

    </div>
</div>
</template>

<script>

import tophader from '@/components/Hader/tophader'
import bottomhader from '@/components/Hader/bottomhader'

export default {
    components:{tophader,bottomhader},
    data() {
        return {
            show_div: false,
            show_item: '',
            list_pop: [
                ['ورود', '/'],
                ['سبد خرید', '/'],
                ['محصولات', '/'],
                ['پیشنهادات روز', '/'],
                ['بومیروگردشگری', '/']
            ],
        }
    },

}
</script>

<style scoped>
.img {
    height: 28px;
}

.dark_div {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.527);
    height: 100vh;
    z-index: 8;
}

.ul1 {
    font-family: 'Vazir';
}

#show_div {
    width: 30%;
    min-width: 300px;
    height: 100vh;
    background-color: honeydew;
    margin: 0px;
    position: absolute;
    z-index: 10;

}

.d1 {
    min-height: 100px;
    border-bottom: rgb(150, 136, 115) 5px solid;
    background-image: url('~assets/image/backgroun_hader.jpg');
    background-attachment: cover;
    box-shadow: 0px 0px 7px 4px darkslateblue;
}
</style>
