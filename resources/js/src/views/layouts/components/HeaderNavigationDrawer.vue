<template lang="">
    <div>
        <v-navigation-drawer 
            app 
            :mini-variant.sync="mini"
            permanent
        >
            <v-list-item class="px-2 py-4">
                <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/10.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>{{getUser.name}}</v-list-item-title>

                <v-btn
                    icon
                    @click.stop="mini = !mini"
                >
                <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider class="mt-0"/>
            
            <v-list>
                <v-list-item
                v-for="([icon, text], i) in items"
                :key="i"
                link
                >
                <v-list-item-icon>
                    <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ text }}</v-list-item-title>
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
                items   : 
                [
                    ['mdi-email', 'Inbox'],
                    ['mdi-account-supervisor-circle', 'Supervisors'],
                    ['mdi-clock-start', 'Clock-in'],
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

            ...mapGetters(
                'auth', 
                [
                    'getUser', 
                ]
            )
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