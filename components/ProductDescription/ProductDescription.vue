<template>
  <div class=" container-fluid-1 mt-5 vazir">
      <div class="row">
          <div class="col-12 col-md-5">
               <productslider></productslider>
          </div>
          <div class=" col-12 col-md-7  mt-3 text-right" >
              <div class=" mr-2" style="height:300px ;">
                  <h1 class="pt-4 ">نام محصول</h1>
                  <h5 class=" pt-4"> توضیحات مربوط به محصول که توسط فروشنده نوشته شده است </h5>
              </div>
                  <div class="w-50 ">
                    <addtocart :max=max ></addtocart>
                  </div>
              </div>
          </div>
          <div class="row row-cols-1">
            <div id="title_comments">
            <h1 class="mt-5 vazir  text-center text-md-right mr-md-5">  نظر کار بران  </h1>
            </div>
            
            <div>
            </div>
          </div>
      </div>

</template>

<script>
export default {
  data() {
    return {
      max:10,
    }
  },

}
</script>

<style>
#title_comments{
  border-bottom: 1px solid black ;
  
}
</style>