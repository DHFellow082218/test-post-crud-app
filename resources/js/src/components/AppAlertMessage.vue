<template>
    <div>
        <v-alert 
            class='mx-auto my-5'
            width="500px"
            elevation="1"
            dismissible
            transition="scale-transition"   
            @input="this.close"
            :type="type" 
            :value="visible"
        >
            {{message}}
        </v-alert> 
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from "vuex"; 

    export default 
    {
        computed    : 
        {
            ...mapState('alertMessage',
                [
                    'message',  
                    'type',
                    'visible'
                ]
            ),
            ...mapGetters('alertMessage',
                [
                    'getMessage', 
                    'getType', 
                    'isVisible'
                ]
            ),
        },
        methods  : 
        {
            ...mapActions('alertMessage', 
                [
                    'destroyAlertMessage'
                ]
            ), 

            close()
            {
                this.destroyAlertMessage(); 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>