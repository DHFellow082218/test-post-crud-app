<template lang="">
    <div>
        <v-app-bar 
            app 
            elevate-on-scroll 
            class="px-15 bg-white"
        >
            <div v-if="!isAuthenticated()">
                <router-link :to="{name: 'home'}" class="grey--text font-weight-bold">Home</router-link>
            </div>
            <v-spacer></v-spacer>
            <div v-if="!isAuthenticated()">
                <router-link :to="{name: 'auth.login'}"  class="grey--text font-weight-bold">
                    Login
                </router-link>
                <v-divider
                    class="mx-5"
                    vertical
                />
                <router-link :to="{name: 'auth.register'}"  class="grey--text font-weight-bold">
                    Register
                </router-link> 
            </div>
            <div v-else>
                <v-menu offset-y>
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-img :src="paths.getUserProfileImagePath(getUser.profile_image)"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{getUser.name}}</v-list-item-title>
                            </v-list-item-content>

                             <v-list-item-action>
                                <v-btn 
                                    icon
                                    v-bind="attrs"
                                    v-on="{...menu }"
                                >
                                    <v-icon color="grey lighten-1">mdi-chevron-down</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </template>
                    <v-list nav dense>                     
                        <v-list-item
                            v-for="(link, i) in links"
                            class="text-decoration-none"
                            :key="i"
                            :to="{name : link.to}"
                        >
                            <v-list-item-icon>
                                <v-icon>{{link.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title >{{link.text}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider class="my-1"></v-divider>
                        <v-list-item @click="handleLogout()">
                            <v-list-item-icon>
                                <v-icon>mdi-exit-to-app</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'; 
    import {paths} from '../../../utils/PathUtil'; 

    export default 
    {
        data: () => (
            {
                links   : 
                [
                    {
                        icon : "mdi-account", 
                        text : "My Profile", 
                        to   : "auth.profile"
                    },
                    {
                        icon : "mdi-key", 
                        text : "Change Password", 
                        to   : "auth.change-password"
                    },
                ],
                paths, 
            }
        ),
        computed: 
        {
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

            handleLogout()
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
        }
    }
</script>

<style lang="">
    
</style>