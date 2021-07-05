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
                Forgot Password?
            </v-card-title>
            <v-card-text  class="pt-10 pb-5 border-top border-bottom">
                <v-form @submit="e.prevent.default()" ref="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                dense
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[this.rules.required('Email'), this.rules.email()]"
                                :error-messages="formErrors.email"
                                @blur="this.toLowerCase"
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
                                @click='submit()'
                                :loading="loading"
                            >
                                Send Password Reset Email
                            </v-btn>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center">
                            <router-link :to="{name: 'auth.login'}" class="text-info">
                                Back to Login 
                            </router-link>
                        </v-col>
                    </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from "vuex"; 
    import {rules, filters} from "../../utils/FormUtil";

    export default 
    {
        title   :   "Forgot Password",    
        data    :   ()  => (
            {
                credentials     :   [],
                rules
            }
        ),
        computed : 
        {
            ...mapState('auth',
                {
                    loading     :   state   =>  state.loading, 
                    formErrors  :   state   =>  state.formErrors 
                }
            )
        },
         methods:
        {
            ...filters, 
            ...mapActions(
                {
                    forgotPassword   : "auth/forgotPassword", 
                    showAlertMessage : "alertMessage/showAlertMessage"
                }, 
            ), 
            submit()
            {
                if(this.$refs.form.validate()) 
                {
                   this.forgotPassword(this.credentials); 
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

<style lang="scss" scoped>

</style>