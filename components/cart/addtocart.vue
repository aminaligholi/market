<template>
<div>
    <div>
    <button class="btn " id="DWON" @click="DOWN()">
      <i class='fas fa-angle-down' style='font-size:24px;color:red'></i>
    </button>
    <input class="mt-1 w-25 text-center" style="{backgrounColor:gray}" disabled v-model="value">
    <button class="btn " id="UP" @click="UP()">
      <i class='fas fa-angle-up' style='font-size:24px;color:green'></i>
    </button>
    <i class='fas fa-cart-arrow-down ' style='font-size:36px; color:green; cursor: pointer;'
      @click="AddToCard()"></i>
  </div>

  <!-- <div class="bg-info" v-show="show_not" >
    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
      <div class="toast" style="position:relatev; top: 0; right: 0;">
        <div class="toast-header">

          <strong class="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
  </div> -->
</div>
</template>

<script>
  import {mapAction} from 'vuex';
  export default {
    props: ['max'],
    data() {
      return {
        value:'',
        show_not:false
      }
    },
    // computed:{
    //   ...mapAction(['UP']),
    // },

    methods: {
      // ...mapAction(['UP']),
      AddToCard() {
        const show_basket = false;
        this.show_not=true;
        this.$emit('show_basket', show_basket)
        this.$emit('value', this.value)

      },
      UP() {
        if (this.value < this.max) {
          this.value++
        };
      },
      DOWN() {

        if (this.value > 1) {
          this.value--
        };

      },

    },
  }
</script>

<style>

</style>