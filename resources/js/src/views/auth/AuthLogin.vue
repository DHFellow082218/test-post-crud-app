<template>
    <v-container>
        <v-card
            class="mx-auto my-5 px-5"
            max-width="550"
        >
            <v-card-title
                primary-title
                class="justify-center py-5 display-1"
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
                                outlined
                                :rules="[this.rules.required('Email'), this.rules.email()]"
                                @blur="this.toLowerCase"
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
                                block
                                :loading="loading"
                                @click='submit()'
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
import {rules, filters} from "../../utils/FormUtil"; 

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
        ...mapState(
            'auth', 
            {
                loading : state => state.loading
            }
        )
    },
    methods:
    {
        ...filters, 
        ...mapActions(
            {
                login            : "auth/login", 
            }
        ),
        submit()
        {
            if(this.$refs.form.validate())
            {
                this.login(this.credentials)
                    .then(res => 
                        {
                            this.$router.push({name : 'home'})
                            this.showAlertMessage(
                                {
                                    message : "Login Success", 
                                    type    : "success", 
                                }
                            )
                        } 
                    )
                    .catch(err => 
                        {
                            this.showAlertMessage(
                                {
                                    message : "Invalid Credentials", 
                                    type    : "error", 
                                }
                            )
                        }
                    )
            }
            else
            {
                this.showAlertMessage(
                    {
                        message : "Please fill up the form correctly", 
                        type    : "error", 
                    }
                )
            }
        }
    }
}
</script>
