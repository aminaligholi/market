<template>
  <div>
  <div class="list-group mb-5 text-right vazir border border-danger mt-3">
  <button @click="setcomponent('profileuser')" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list">پروفایل</button>
  <button @click="setcomponent('usercart')" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list">سبد خرید</button>
  <button @click="setcomponent('userHbuy')" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list">سابقه خرید</button>
  <button @click="setcomponent('Trackorders')" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list">پیگیری سفارشات</button>
  <button @click="setcomponent('usermarket')" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list">فروشگاه شما </button>
  <button @click="setcomponent('follow')" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list">محصولات مورد علاقه </button>
  <button  class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list">{{actcomp}}</button>
</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
computed:{

},
methods:{
    ...mapMutations({setcomponent:'user/setcomponent'})
}
}
</script>

<style>
/* .activ:active{
    background-color: brown;
    color: cornsilk;
} */
.active:enabled{
     background-color: brown;
    color: cornsilk;
}
</style>