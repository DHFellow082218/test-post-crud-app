<template>
    <div>
        <v-alert 
            class='text-center mx-auto my-10'
            width="40%"
            elevation=5
            dismissible
            transition="scale-transition"
            :border="border"
            :type='type' 
            :value='visible'
        >
            {{message}}
        </v-alert> 
    </div>
</template>

<script>
    export default 
    {
        props : 
        {
            message     : 
            {
                type    : String
            },
            type        :         
            {
                type    : String    
            }, 
            visible     : 
            {
                type    : Boolean
            }   
        },
        data  : () => ({border : "left"})
        
    }
</script>

<style lang="scss" scoped>

</style>