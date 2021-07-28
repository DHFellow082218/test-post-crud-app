<template lang="">
    <div>
        <v-navigation-drawer 
            app 
            :mini-variant.sync="mini"
            permanent
        >
            <v-list-item class="px-2 py-1">
                <v-list-item-avatar>
                    <v-img :src="'../assets/site_logo.png'"/>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Blog App</v-list-item-title>
                </v-list-item-content>
                <v-btn
                    icon
                    @click.stop="mini = !mini"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider class="mt-0"/>
            
            <v-list nav dense>
                <v-list-item
                    v-for="(link, i) in links"
                    class="text-decoration-none"
                    :key="i"
                    :to="{name : link.to}"
                    link 
                    exact
                >
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title >{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        
            <template v-slot:append v-if="!mini">
                <div class="pa-2">
                    <v-btn 
                        color="error" 
                        block 
                        @click="logoutUser()"
                        :loading="processing"
                    >
                        Logout
                    </v-btn>
                </div>
            </template>

        </v-navigation-drawer>
    </div>
</template>

<script>

    import {mapGetters, mapActions, mapState} from "vuex"; 

    export default 
    {
        data: () => 
        (
            {
                drawer  : true, 
                mini    : true,
                links   : 
                [
                    {
                        icon : "mdi-home", 
                        text : "Home", 
                        to   : "home"
                    },  
                ],
            }
        ),
        components: 
        {
            //...
        },
        computed: 
        {
            ...mapState(
                'auth', 
                {
                    processing  :   state => state.processing
                }
            ), 
        },     
        methods: 
        {
            ...mapActions(
                'auth',
                [
                    'logout'
                ]
            ),

            logoutUser()
            {
                this.logout()
                    .then((res) =>
                        {
                            if(res.data.success)
                            {
                                this.showAlertMessage(
                                    {
                                        "message" : res.data.message, 
                                        "type"    : "info" 
                                    }
                                ); 

                                this.$router.replace({name : 'auth.login'})
                            } 
                        }
                    )
                    .catch(err => 
                        {
                            this.showAlertMessage(
                                {
                                    "message" : "Could not logout", 
                                    "type"    : "error" 
                                }
                            ); 
                        }
                    );
            }
        },
    }

</script>

<style lang="">
    
</style>