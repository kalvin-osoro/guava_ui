<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3"> Edit Product</h4>
                
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="product">
                    <div class="form-group">
                        <label> Category</label>
                        
                        <select class="form-control" v-model="product.categoryId" required>
                            <option v-for="category of categories"
                                    :key="category.id"
                                    :value="category.id"> {{category.categoryName}}</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name" required/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="product.description" required/>
                    </div>                    
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="product.price" required/>
                    </div>

                    <div class="form-group">
                        <label for="">File</label>
                        <input type="file" class="form-control"  required @change="onFileSelected" >
                    </div> 

                    <button type="button" class="btn btn-primary"
                            @click="editProduct" >Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        data() {
            // return {
            //     product: null,
            //     id: null
            // }
            return {
                product: {
                    name: null,
                    price: null,
                    description: null,
                    categoryId: null,
                },
                id: null,
                path: null
            }
        },
        props: ["baseURL",  "products", "categories"],
        methods: {

            onFileSelected(event) {
                // this.category.file = event.target.files[0];
                this.path = event.target.files[0];
            },

            async editProduct() {

                console.log('product', this.product)

                const formData = new FormData();

                formData.append("productDetails", JSON.stringify(this.product))
                formData.append("img", this.path);

                console.log(formData)

                await axios({
                    method: "post",
                    url: `${this.baseURL}product/update/${this.id}`,
                    data: formData,
                    headers: {

                        'Content-type': 'multipart/form-data'
                    },                    
                })
                .then(() => {
                    this.$router.push({name: 'ProductView'})
                    swal({
                        text: "Product updated successfully",
                        icon: "success",
                    })
                })
                .catch((err => {
                    console.log(err);
                })) 
               
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.product = this.products.find(product => product.id == this.id)
        }
    }
</script>