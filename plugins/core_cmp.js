import Vue from 'vue'



import hader from '@/components/Hader/hader'
// import tophader from '@/components/Hader/tophader'
// import bottomhader from '@/components/Hader/bottomhader'
import slider from '@/components/Slider/slider'
import category from '@/components/category_card/category'
import productCard from '@/components/product_card/productCard'
import cart from '@/components/cart/cart'
import ProductDescription from '@/components/ProductDescription/ProductDescription'
import productslider from '@/components/Slider/productslider'
import addtocart from '@/components/cart/addtocart'
import user from '@/components/user/user'
import menuuser from '@/components/user/menuuser'



Vue.component('hader', hader)
    // Vue.component('tophader', tophader)
    // Vue.component('bottomhader', bottomhader)
Vue.component('slider', slider)
Vue.component('category', category)
Vue.component('productCard', productCard)
Vue.component('cart', cart)
Vue.component('ProductDescription', ProductDescription)
Vue.component('productslider', productslider)
Vue.component('addtocart', addtocart)
Vue.component('user', user)
Vue.component('menuuser', menuuser)