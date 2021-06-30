<template>
    <v-container>
        <v-card
            class="mx-auto my-5 py-5"
            max-width="550"
        >
            <v-card-title
                primary-title
                class="justify-center"
            >
                Login
            </v-card-title>
            <v-card-text>
                <v-form @submit="e.prevent.default()" class="py-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                :rules="this.rules.required('Email')"
                                dense 
                                prepend-inner-icon="mdi-email-outline"
                                outlined
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.password"
                                type="password"
                                label="Password"
                                dense
                                prepend-inner-icon="mdi-lock-outline"
                                append-icon="mdi-eye-off-outline"
                                outlined
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                    <v-row>
                        <v-col cols="12" class="d-flex justify-center">
                            <v-btn  
                                color="success" 
                                @click='submit()'
                                width="500"
                            >
                                Login
                            </v-btn>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center">
                            <router-link :to="{name: 'auth.forgot-password'}" class="text-info">
                                Forgot Password?
                            </router-link>
                        </v-col>
                    </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>

import {mapState, mapGetters, mapActions} from "vuex";
import rules from "../../utils/FormRulesUtil"; 

export default
{
    title: 'Login',

    components:
    {
    },
    data : () => (
        {
            credentials  : [],
            rules        
        }
    ),
    computed:
    {
        /*
        ...mapGetters('auth',
            {
                alertMessage : 'get_message'
            }
        ),
        */
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
            console.log(this.rules);
            /*
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
            */
        }
    }
}
</script>
