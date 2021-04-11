<template>
    <div class="card">
        <div class="card-header bg-info text-white">Example Component</div>

        <div class="card-body">
            I'm an example component.
        </div>
    </div>
</template>

<script>
    export default {
        mounted() 
        {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
    .card 
    {
        width           :   500px; 
        height          :   400px; 
        box-shadow      :   0 0 2px 2px rgba(0, 0, 0, 0.1); 
    }

</style>
