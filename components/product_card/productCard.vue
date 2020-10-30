<template>
<div class="card my-4 ml-1  border-primary mw">
    <nuxt-link to="/" id="nuxtlink">
        <img class="card-img-top" src="@/assets/image/BgdCopy.jpg">
        <div class="card-body text-right pb-0">
            <h5 class="card-title mb-0 "> {{name}}</h5>
        </div>
    </nuxt-link>
    <ul class="list-group list-group-flush px-0 mt-0 border-0 text-right">
        <li class="list-group-item text-center pt-0 " style="fontSize:20px;color:green;fontWeight:bold"> {{price}}</li>
        <li class="list-group-item" v-show="show_basket">
            <div class="progress hi-prog">
                <div class="progress-bar bg-success text-right" role="progressbar" id="progressbar" :style="{width:`${(value/max)*100}%`}"></div>
            </div>
        </li>
        <li class="list-group-item mb-3 text-left" v-show="!show_basket">
            <span class="badge badge-secondary bg-danger">{{seller}}</span>
            <span class="badge badge-secondary bg-dark">{{state}}</span>
            <span class="badge badge-secondary bg-success">{{category}}</span>
        </li>
    </ul>
    <div class="row mx-2 mb-2">
        <div class="col-8  text-right ">
            <div class="ml-3">
                <button class="btn btn-success" v-show="!show_basket" @click="show_basket=!show_basket" style="padding:7px 0px ;fontSize:16px"> افزودن به
                    سبدخرید</button>
            </div>
            <div class="ml-3" v-show="show_basket">
               <addtocart :max="number"
               @show_basket="show_basket=$event"
               @value="value=$event"></addtocart>
            </div>
        </div>
        <div class="col-4 my-auto">
            <nuxt-link to="/product/prod1"><button class="btn btn-warning"> بیشتر</button></nuxt-link>
        </div>
    </div>
</div>

</template>

<script>

export default {
    props:[
        'name',
        'category',
        'price',
        'number',
        'seller',
        'state',
    ],
    data() {
        return {
            show_basket: false,
            value:'',
            // max:10
        }
    },
    methods: {
        showb() {
            this.show_basket = true;
        },

    },

}
</script>

<style scoped>
.card-img-top {
    height: 350px;
}

#nuxtlink {
    color: black;
    text-decoration: none;
    font-family: 'Vazir';
}

.mw {
    max-width: 300px;
    min-width: 290px;
    height: 550px;

}

.hi-prog {
    height: 10px;
    background-color: rgba(105, 105, 105, 0.466);
}
</style>
