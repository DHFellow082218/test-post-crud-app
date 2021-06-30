<template>
    <div>
       <v-card
            class="mx-auto my-5 py-5"
            max-width="450px"
            elevation="2">
           <v-card-title
                primary-title
                class="justify-center"
           >
               Login
           </v-card-title>
           <v-card-text>
               <v-form @submit="e.prevent.default()">
                   <v-row>
                       <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                prepend-icon="mdi-email"
                            />
                       </v-col>
                       <v-col cols="12">
                            <v-text-field
                                v-model="credentials.password"
                                type="password"
                                label="Password"
                                prepend-icon="mdi-lock"
                                append-icon="mdi-eye-off"
                            />
                       </v-col>
                   </v-row>
               </v-form>
           </v-card-text>
           <v-card-actions>
                <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                        <v-btn  class='text-white' 
                                color="black" 
                                @click='submit()'
                                width="400"
                        >
                            Login
                        </v-btn>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center">
                        <router-link :to="{name: 'auth.forgot-password'}" class="text-success">
                            Forgot Password?
                        </router-link>
                    </v-col>
                </v-row>
           </v-card-actions>
       </v-card>
    </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from "vuex";

export default
{
    title: 'Login',

    components:
    {
    },
    data : () => (
        {
            credentials  : [],
        }
    ),
    computed:
    {
         ...mapGetters('auth',
            {
                alertMessage : 'get_message'
            }
        ),
    },
    methods:
    {
        ...mapActions(
            'auth',
            [
                'login',
            ]
        ),

        submit()
        {
            this.login(this.credentials)
                .then((res) =>
                    {
                        this.$router.replace({name : 'home'});
                    }
                )
                .catch((err) =>
                    {
                        console.log(err);
                    }
                );
        }
    }
}
</script>
