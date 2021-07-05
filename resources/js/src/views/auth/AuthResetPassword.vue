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
                Reset Password
            </v-card-title>
            <v-card-text class="pt-10 pb-5 border-top border-bottom">
                <v-form ref="form" @submit="e.prevent.default()">
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
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.password"
                                label="New Password"
                                prepend-inner-icon="mdi-lock-outline"
                                append-icon="mdi-eye-off-outline"
                                dense
                                :rules="[this.rules.required('Password'), this.rules.minLength({fieldName:'Password', length:8})]"
                                outlined
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
                                :loading="loading"
                                width="500"
                            >
                                Reset Password
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
        title   :   "Reset Password",    
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
                    resetPassword   : "auth/resetPassword", 
                    showAlertMessage : "alertMessage/showAlertMessage"
                }, 
            ), 
            submit()
            {
                if(this.$refs.form.validate()) 
                {
                    this.credentials.token = this.$route.params.token;

                    console.log(this.credentials);
                    this.resetPassword(this.credentials); 
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
        },  
        mounted() 
        {
            console.log(this.$route.params.token);
        }
    }
</script>

<style lang="scss" scoped>

</style>