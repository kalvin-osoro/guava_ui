<template>
    <div class="container py-4">
        <router-link :to="{name: 'CategoryView'}" >
            <button class="btn btn-primary btn-lg"> Admin Category</button>
        </router-link>
        <br />
        <router-link :to="{name: 'AdminProduct'}" >
            <button class="btn btn-primary btn-lg"> Admin Products</button>
        </router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style>
    .btn {
        margin-bottom: 20px;
    }
</style>