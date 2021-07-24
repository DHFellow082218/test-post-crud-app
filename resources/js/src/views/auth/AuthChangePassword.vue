<template lang="">
    <v-container>
        <v-card
            class="mx-auto my-5 px-5"
            max-width="550"
            flat
        >
            <v-card-title
                primary-title
                class="justify-center py-5 display-1"
            >
                Change Password
            </v-card-title>
            <v-card-text class="pt-10 pb-5 border-top border-bottom">
                <v-form ref="form" @submit="e.prevent.default()">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.current_password"
                                label="Current Password"
                                dense
                                prepend-inner-icon="mdi-key-chain"
                                :rules="[this.rules.required('Current Password')]"
                                :error-messages="formErrors.email"
                                @blur="this.toLowerCase"
                                outlined
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                :type="showPassword ? 'password' : 'text'"
                                v-model="credentials.password"
                                label="Password"
                                prepend-inner-icon="mdi-lock-outline"
                                :append-icon="showPassword ? 'mdi-eye-off-outline' :'mdi-eye'"
                                :rules="[this.rules.required('Password'), this.rules.minLength({fieldName:'Password', length:8})]"
                                dense
                                outlined
                                @click:append="() => (showPassword = !showPassword)"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.password_confirmation"
                                label="Confirm Password"
                                prepend-inner-icon="mdi-lock-check-outline"
                                dense
                                :rules="[this.rules.required(), this.rules.equals(this.credentials.password, 'Passwords')]"
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
                                :loading="processing"
                                width="500"
                            >
                                Change Password
                            </v-btn>
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
        title   :   "Change Password", 
        data    :   ()  => (
            {
                credentials     :   {}, 
                formErrors      :   
                {
                    current_password    :   null,
                }, 
                showPassword    :   String,
                rules      
            }
        ),
        computed:
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
                    "changePassword"
                ]
            ), 

            submit()
            {
                this.setFormErrors();

                if(this.$refs.form.validate())
                {
                    this.changePassword(this.credentials)
                        .then(res => 
                            {
                                if(res.status === 200)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message, 
                                            type    : "info", 
                                        }
                                    )
                                }
                                else 
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message, 
                                            type    : "error", 
                                        }
                                    )
                                }
                            }
                        )
                        .catch(err => 
                            {
                                 this.showAlertMessage(
                                    {
                                        message : "Could not change password", 
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
            },

            setFormErrors(errors = null)
            {
                if(errors)
                {
                    
                }
                else 
                {
                    this.formErrors = {};
                }
            }
        }, 
    }
</script>

<style lang="">
    
</style>