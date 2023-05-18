<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3"> Edit Category</h4>
                <!-- {{ id }}
                {{ categoryDetails }} -->
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="category">
                   
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="category.categoryName" required/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="category.description" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="">File</label>
                        <input type="file" class="form-control"  required @change="onFileSelected" >
                    </div>                   
                    
                    <button type="button" class="btn btn-primary"
                            @click="editCategory" >Submit</button>
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
            //     category: null, 
            //     id: null              
            // }
            return {
                category: {
                    categoryName: null,
                    description: null,
                    // file: null
                },
                id: null,
                path: null
            }
        },
        props: ["baseURL",  "categories"],
        methods: {

            onFileSelected(event) {
                // this.category.file = event.target.files[0];
                this.path = event.target.files[0];
            },

         async  editCategory() {
                delete this.category["products"]
                console.log('category', this.category)

                const formData = new FormData();

                formData.append("categoryDetails", JSON.stringify(this.category))
                // formData.append("image",this.category.file);
                formData.append("image",this.path);

                console.log(formData)

                const cacheBuster = new Date().getTime(); // Generate a unique timestamp

              await   axios({
                    method: "post",
                    url: `${this.baseURL}category/update/${this.id}`,
                    data: formData,
                    headers: {
                        'Content-type': 'multipart/form-data'
                    },
                    params: {
                        _cb: cacheBuster //append the cache-busting parameter
                        //By appending _cb (or any other parameter name of your choice) with the cache-busting value to the URL, 
                        //you ensure that the image is fetched from the server instead of the cache.
                    }
                })
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({name: 'CategoryView'})
                    swal({
                        text: "category has been updated successfully",
                        icon: "success",
                    });
                })
                .catch((err => {
                    console.log(err);
                }))               
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id);
        }
    }
</script>