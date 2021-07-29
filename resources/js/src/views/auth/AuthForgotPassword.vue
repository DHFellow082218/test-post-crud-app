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
                                :rules="[rules.required('Email'), rules.email()]"
                                :error-messages="formErrors.email"
                                @blur="toLowerCase"
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
                                @click='handleSubmit()'
                                :loading="processing"
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
                formErrors      :   {email : null},  
                rules
            }
        ),
        computed : 
        {
            ...mapState(
                'auth', 
                {
                    processing : state => state.processing 
                }
            )
        },
         methods:
        {
            ...filters, 

            ...mapActions(
                'auth', 
                [
                    "forgotPassword"
                ]
            ), 

            handleSubmit()
            {
                this.setFormErrors(); 

                if(this.$refs.form.validate()) 
                {
                    this.forgotPassword(this.credentials)
                        .then(res => 
                            {
                                if(res.status === 200)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message, 
                                            type    : "success", 
                                        }
                                    )
                                }

                                if(res.status === 422)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message,  
                                            type    : "error", 
                                        }
                                    );  

                                    this.setFormErrors(res.data.errors)
                                }

                                if(res.status === 500 || res.status === 400)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : "Could not send Email, Try again later",  
                                            type    : "error", 
                                        }
                                    );  

                                }
                            }
                        ) 
                        .catch(err => 
                            {
                                 this.showAlertMessage(
                                    {
                                        message : "Something went wrong",  
                                        type    : "error", 
                                    }
                                );  

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
            }, 
            
            setFormErrors(errors = null)
            {
                if(errors)
                {
                    if(errors.email)
                    {
                        this.formErrors.email  =  errors.email[0];                 
                    }
                }
                else 
                {
                    this.formErrors.email  =  null;      
                }
            }
        } 
    }
</script>

<style lang="scss" scoped>

</style>