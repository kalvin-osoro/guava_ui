<template>
  <!-- <NavbarView /> -->
   <NavbarView :cartCount="cartCount" @resetCartCount="resetCartCount" />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br>
    <br>
    <router-link to="/admin/product/add">AddProduct</router-link>
    <br>
    <br>
    <router-link to="/admin/product">ViewProducts</router-link>
  </nav> -->
  <!-- <router-view   
    v-if="products"
    style="min-height: 60vh"
    :baseURL="baseURL"    
    :products="products"
    @fetchData="fetchData"
  >
  </router-view> -->

  <router-view     
  v-if="categories && products"    
    style="min-height: 60vh"
    :baseURL="baseURL"    
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  >
  </router-view>
 
  <FooterView />
</template>

<script>
import NavbarView from './components/NavbarView.vue';
import FooterView from './components/FooterView.vue';
import axios from 'axios';

export default {
    // components: { NavbarView, FooterView },
    data() {
        return {
            // baseURL: "https://limitless-lake-55070.herokuapp.com/",
            // baseURL: "https://guava-app.azurewebsites.net/",
            baseURL: "http://localhost:8080/",
            products: null,
            categories: null,
            cartCount: 0,
        };
    },
    methods: {
        async fetchData() {
            // // api call to get all the categories
            await axios
              .get(this.baseURL + 'category/')
              .then((res) => {
                this.categories = res.data;
              })
              .catch((err) => console.log('err', err));
            // api call to get the products
            await axios
                .get(this.baseURL + "product/")
                .then((res) => {
                this.products = res.data;
            })
                .catch((err) => console.log("err", err));
            // fetch cart item if token is present i.e logged in
            if (this.token) {
                axios
                    .get(`${this.baseURL}cart/?token=${this.token}`)
                    .then((res) => {
                    const result = res.data;
                    this.cartCount = result.cartItems.length;
                })
                    .catch((err) => console.log("err", err));
            }
        },
        resetCartCount() {
            this.cartCount = 0;
        },
    },
    mounted() {
        this.token = localStorage.getItem("token");
        this.fetchData();
    },
    components: { FooterView, NavbarView }
}
</script>

<style>

html {
  overflow-y: scroll;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
