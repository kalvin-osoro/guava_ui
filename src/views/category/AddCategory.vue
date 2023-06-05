<template>   
    <div class="container">
     <div class="row">
         <div class="col-12 text-center">
             <h3 class="pt-3">Add Category</h3>
         </div>
     </div>
     <div class="row">
         <div class="col-3"></div>
         <div class="col-6">
             <form action="">
                
             <div class="form-group">
                 <label for="">Name</label>
                 <input type="text" class="form-control" v-model="categoryDetails.categoryName">
             </div>
             <div class="form-group">
                 <label for="">Description</label>
                 <textarea type="text" class="form-control" v-model="categoryDetails.description"/>
                 <!-- <input type="text" class="form-control"> -->
             </div>
             
             <div class="form-group">
                 <label for="">File</label>
                 <input type="file" class="form-control" @change="onFileSelected">
             </div>
             <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
             
         </form>
         </div>
         <div class="col-3"></div>
         
     </div>
    </div>
 
 </template>
 
 <script>
 import axios from 'axios';
 const sweetalert = require("sweetalert");
//  import swal from 'sweetalert';
 
 export default {    
     data() {
        
        return {
            categoryDetails: {
        categoryName: '',        
        description: '',        
      },
      path: null
    };
         
     },
     methods: {
         onFileSelected(event) {
            //  this.file = event.target.files[0];
            this.path = event.target.files[0];
         },
         addCategory() {
                
             const formData = new FormData();      
            
            formData.append("categoryDetails", JSON.stringify(this.categoryDetails))
            
            formData.append('image', this.path);

             console.log(formData)
 
            //  const baseURL = "http://localhost:8080"
             const baseURL = "https://guava-app.azurewebsites.net/"
             
             axios({
                 method: "post",
                 url: `${baseURL}/category/add-category`,                
                 data: formData,
                 headers: {
                     'Content-Type': 'multipart/form-data'
                    
                     
                 }
             })
             .then(() => {
                this.$router.push({name: 'CategoryView'}) 
                 sweetalert({
                     text: "Product added successfully",
                     icon: "success",
                 });
             })
             .catch((err) => {
                 console.log(err);

                 if (err.response.status === 400) {
                    sweetalert ({
                        text: "Category with the given ID does not exist",
                        icon: "error",
                    });
                    
                 }
             })
         }
     }
 }
 </script>
 
 <style scoped>
 
 </style>
 