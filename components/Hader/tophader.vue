<template>
<div>

    <div class=" d2 row">
        <div class="my-auto  col-md-3 col-12 text-center row align-self-center">
            <span v-show="!show_item " class="col-4  mt-2 row">
                <slot></slot>
            </span>
            <div class="col-4 col-md-12 text-center">
                <nuxt-link to="/">
                    <img class="img mx-auto mr-md-2 mt-2" id="img1" src="@/assets/image/logo.svg">
                </nuxt-link>
            </div>
            <span v-show="!show_item" class="col-4"></span>
        </div>
        <div class="my-auto col-12 col-md-5 ">
            <div class="input-group grop1 mt-2">
                <input type="text" class=" inp1 form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                <div class="input-group-prepend">
                    <button class="btn1 btn " type="button" id="button-addon1">جستوجو</button>
                </div>
            </div>
        </div>
        <div class="col-4 my-auto row justify-content-end  pt-3" v-show="show_item">

            <div class="  col-2 px-0">
                <nuxt-link to="/user">
                    <div class=" butn1  text-center">
                        <i class='fas fa-user-lock mt-3 ' style='font-size:30px; color:rgb(5, 194, 5)'></i>
                    </div>
                </nuxt-link>
            </div>
            <div class="  col-2 px-0">
                <nuxt-link to="/cart/_id">
                    <div class=" butn1 text-center" role="cart">
                        <i class='fas fa-cart-plus mt-3 ' style='font-size:30px; color:rgb(255,115,0)'></i>
                    </div>
                </nuxt-link>
            </div>
            <div class="  col-2 px-0">
                <nuxt-link to="/">
                    <div class=" butn1 text-center" style="borderLeft:none;">
                        <i class='fas fa-info-circle mt-3 ' style='font-size:30px; color:rgb(25,0,255)'></i>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    props: ['show_item'],
    data() {
        return {
            show_item: true,

        }
    },
    mounted() {
        this.$nextTick(function () {
            this.onResize();
        })
        window.addEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            const size_x = window.innerWidth;
            if (size_x <= 767) {
                this.show_item = false;
            } else {
                this.show_item = true;
            }
            this.$emit('show_item', this.show_item)
        },
    }

}
</script>

<style scoped>
.dark_div {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.527);
    height: 100vh;
    z-index: 8;
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

.model {
    width: 45%;
    height: 92vh;
    margin-top: 3%;
    margin-bottom: 0px;
    padding: 0;
    margin: none !important;

}

.butn1 {
    height: 60px;
    border: 1px solid rgba(129, 128, 128, 0.973);
    border-top: none;
    border-right: none;
    background-color: rgb(255, 255, 255);
    border-bottom: none;

}

.butn1:hover {
    box-shadow: 0px 0px 3px 4px gold inset;
}

.grop1 {
    border: 1px rgb(37, 33, 33) solid;
    border-radius: 15px 15px 15px 15px;
    overflow: hidden;
    box-shadow: 0px 0px 7px 1px rgb(121, 114, 114);
}

.grop1:hover {
    transform: scale(1.05);
    border-radius: none;
}

.inp1 {
    border-left: none !important;
    font-family: 'vazir';
    box-shadow: 0px 0px 7px 3px rgb(73, 223, 185) inset;
}

#button-addon1 {

    border-radius: 15px 0px 0px 15px;
    background-color: rgb(73, 223, 185);
}

.img {
    height: 28px;
}

.d2 {
    height: 80px;
    border-bottom: 1px solid rgb(30, 223, 223);

}
</style>
