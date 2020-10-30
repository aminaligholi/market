<template>
<transition mode="out-in" type="animation" enter-active-class="animate__animated animate__fadeInDown"  leave-active-class="animate__animated animate__bounceOutDown">
  <div :is=actcomp class="text-right shabnam">
    
  </div>
</transition>
</template>

<script>
import {mapGetters} from 'vuex';
import  profileuser from '@/components/user/profileuser'
import  usercart from '@/components/user/usercart'
import userHbuy  from '@/components/user/userHbuy'
import  Trackorders from '@/components/user/Trackorders'
import  usermarket from '@/components/user/usermarket'
import  follow from '@/components/user/follow'


  export default {
    components:{profileuser,usercart,userHbuy,Trackorders,usermarket,follow},
    computed:{...mapGetters({actcomp:'user/actcomp'})}

  };

</script>

<style>
</style>
