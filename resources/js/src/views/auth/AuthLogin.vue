<template>
    <v-container>
        <v-card
            class="mx-auto my-5 px-5"
            max-width="550"
        >
            <v-card-title
                primary-title
                class="justify-center py-5"
            >
                Login
            </v-card-title>
            <v-card-text class="pt-10 pb-5 border-top border-bottom">
                <v-form @submit="e.prevent.default()" ref="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                dense 
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[this.rules.required('Email'), this.rules.email()]"
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
                                :rules="[this.rules.required('Password')]"
                                outlined
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="py-5">
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
            if(this.$refs.form.validate())
            {
                alert('validated');
            }
            else
            {
                alert('form errors');
            }
        }
    }
}
</script>
