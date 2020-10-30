<template>
  <div class="container-fluid-1">
    <div class=" row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-around">
    <ProductCard v-for="pd in allproduct" :key="pd.id"
    :name="pd.name"
    :category="pd.category"
    :price="pd.price"
    :number="pd.number"
    :seller="pd.seller"
    :state="pd.state"
    ></ProductCard>
    </div>
    
  </div>
</template>

<script>
 import { mapGetters } from "vuex";
export default {
  head:{
    title:'Product'
  },
    computed:{
      ...mapGetters({
          allproduct: 'product/allproduct'
      })
  },

}
</script>

<style>

</style>