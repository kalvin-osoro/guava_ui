<template>
  <!-- <div id="background-div" class="page-holder bg-cover">
    <div class="container py-5">
      <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <a href="#start-shopping" class="bg-white px-2 py-2 rounded"> Start shopping</a> </h3>
            <p class="lead mb-0 bg-dark p-1 rounded"> Guava</p>
        </header>
    </div>
    <hr>
  </div> -->

  <div class="container">

    <!--      display products-->

    <div class="row">
        <div v-for="index in this.productSize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="products[index-1]" />
        </div>
    </div>
    

  </div>

</template>

<script>

// import { onMounted } from "vue";
import ProductBox from "../components/product/ProductBox.vue";


export default {
  name: 'HomeView',
  components: {
    ProductBox
    
  },
  props: ["products"],
  
  data() {
    return {
      
      productSize: 0
    }
  
},

mounted() {
  // this.productSize = Math.min(8, this.products.length);
  if (this.products) {
    this.productSize = Math.min(8, this.products.length);
  }
}

}

</script>


<style>
  .page-holder {
    min-height: 100vh;
  }
  .bg-cover{
    background-size: cover !important;
  }
  #background-div {
    /* background: url("../assets/home.png"); */
  }
  #heading {
    font-weight: 400;
  }
</style>
