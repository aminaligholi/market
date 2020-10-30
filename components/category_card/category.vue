<template>
<div class="container mt-5">
    <div class="row row-cols-md-2 row-cols-1 bg-info ">
        <div class="col bg-warning text-center ">
            <div class="card my-2 mx-0 " style="maxWidth:100%;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="@/assets/image/BgdCopy.jpg" class="card-img" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-right">
                            <nuxt-link to="/product/category/handwork">
                                <h5 class="card-title">product</h5>
                            </nuxt-link>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
.container {
    max-width: 1300px;
}
</style>
