<template>   
   <div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h3 class="pt-3">Our Products</h3>
            <router-link :to="{ name: 'AddProduct' }">
               <button class="btn" style="float: right">Add Product</button>
            </router-link>
        </div>         
    </div>
    <div class="row">
        <!-- <div v-for="category of categories" :key="category.id"  -->
        <div v-for="product of products" :key="product.id" 
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
        <ProductBox :product="product"/>
           <!-- <ProductBox :product="product" v-for="product in product.products" :key="product.id"> </ProductBox> -->
        </div>
    </div>
   </div>
</template>

<script>
import ProductBox from '../../components/product/ProductBox.vue';

export default {   
   name: "ProductView",
   components: { ProductBox }, 
   props:["products"],
    data() {
        return{
           baseURL: "http://localhost:8080", 
        //    baseURL: "https://guava-app.azurewebsites.net/",
                     
         
        }
    },
    methods: {
      
    },
    mounted() {
      
    }
}
</script> 
<style scoped> 
</style>
