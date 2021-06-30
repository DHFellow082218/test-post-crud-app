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
    import {mapGetters} from "vuex"; 

    export default 
    {
        computed    : 
        {
            ...mapGetters('auth',
                {
                    alertMessage : 'get_message'
                }
            ),
        }
    }
</script>

<style lang="scss" scoped>

</style>