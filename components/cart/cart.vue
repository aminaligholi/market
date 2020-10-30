<template>
  <div class="  container-fluid-1 text-md-right text-center">
    <h1 class="mb-5"><span>{{this.$route.params.id}}</span> عزیز</h1>
    <div class="row justify-content-center">
      <div class="col-10">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">نام محصول</th>
              <th scope="col">قیمت واحد </th>
              <th scope="col">تعداد </th>
              <th scope="col">قیمت کل به تومان </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>محصول اول </td>
              <td>قیمت محصول اول </td>
              <td>تعداد محصول اول </td>
              <td>مجموع قیمت اول </td>
            </tr>
            <tr>
              <th scope="row">*</th>
              <td colspan="3" class=" font-weight-bold">مجموع کل خرید</td>
              <td> قیمت مجموع </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Cart_Page'
    },

  }
</script>

<style>

</style>